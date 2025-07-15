'use client'

import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ColourfulText from "./ui/colourful-text";

const images = [
  "/images/hero.jpg",
  "/images/hero2.jpg",
  "/images/Untitled.jpg",
];

const suggestions = [
  "Birthday Party",
  "Meeting",
  "Get Together",
  "Study Room",
  "Photo Shoot",
  "Workshop",
  "Conference",
  "Celebration",
  "Interview",
  "Training Session"
];

function debounce<F extends (...args: any[]) => void>(func: F, wait: number) {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [placeSuggestions, setPlaceSuggestions] = useState<any[]>([]);
  const [whereValue, setWhereValue] = useState("");
  const [showWhereSuggestions, setShowWhereSuggestions] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Debounced fetch for places
  const fetchPlaces = useCallback(
    debounce(async (query: string) => {
      if (!query) {
        setPlaceSuggestions([]);
        return;
      }
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=5`,
        { headers: { 'Accept-Language': 'en' } }
      );
      const data = await res.json();
      setPlaceSuggestions(data);
    }, 400),
    []
  );

  useEffect(() => {
    if (showWhereSuggestions && whereValue.trim() !== "") {
      fetchPlaces(whereValue);
    } else {
      setPlaceSuggestions([]);
    }
  }, [whereValue, fetchPlaces, showWhereSuggestions]);

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    if (value.trim() === "") {
      setFilteredSuggestions(suggestions);
    } else {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    setShowSuggestions(false);
  };

  const handleWhereInputChange = (value: string) => {
    setWhereValue(value);
    setShowWhereSuggestions(true);
  };

  const handleWhereSuggestionClick = (place: any) => {
    setWhereValue(place.display_name);
    setShowWhereSuggestions(false);
  };

  // Helper to handle focus/blur for all search fields
  const handleSearchFocus = () => setIsSearchFocused(true);
  const handleSearchBlur = () => setTimeout(() => setIsSearchFocused(false), 100);

  return (
    <section className="relative h-[90vh] min-h-[830px] flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Peerspace hero background"
            className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ transition: "opacity 1s" }}
          />
        ))}
        <div className={`absolute inset-0 bg-black/40 z-20 transition-all duration-300 ${isSearchFocused ? 'backdrop-blur-sm' : ''}`} />
      </div>

      {/* Centered search box */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-stretch md:items-end p-4 md:p-0 gap-2 md:gap-0">
          <div className="flex-1 flex flex-col px-4 py-2 relative">
            <label className="text-xs font-semibold text-gray-500 mb-1">What are you planning?</label>
            <input
              type="text"
              placeholder="Enter your activity"
              className="border-none outline-none bg-transparent text-base text-gray-900 placeholder-gray-400"
              value={searchValue}
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={e => { setShowSuggestions(true); handleSearchFocus(); }}
              onBlur={e => { setShowSuggestions(false); handleSearchBlur(); }}
            />
            {showSuggestions && (
              <div className="absolute left-0 top-full w-full z-40 bg-white rounded-lg border border-gray-200 shadow-lg mt-1 max-h-60 overflow-y-auto">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((suggestion) => (
                    <div
                      key={suggestion}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-400">No suggestions found.</div>
                )}
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col px-4 py-2 border-t md:border-t-0 md:border-l border-gray-200 relative">
            <label className="text-xs font-semibold text-gray-500 mb-1">Where?</label>
            <input
              type="text"
              placeholder="Location"
              className="border-none outline-none bg-transparent text-base text-gray-900 placeholder-gray-400"
              value={whereValue}
              onChange={(e) => handleWhereInputChange(e.target.value)}
              onFocus={e => { setShowWhereSuggestions(true); handleSearchFocus(); }}
              onBlur={e => { setTimeout(() => setShowWhereSuggestions(false), 200); handleSearchBlur(); }}
            />
            {showWhereSuggestions && placeSuggestions.length > 0 && (
              <div className="absolute left-0 top-full w-full z-40 bg-white rounded-lg border border-gray-200 shadow-lg mt-1 max-h-60 overflow-y-auto">
                {placeSuggestions.map((place) => (
                  <div
                    key={place.place_id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onMouseDown={() => handleWhereSuggestionClick(place)}
                  >
                    {place.display_name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col px-4 py-1 border-t md:border-t-0 md:border-l border-gray-200 relative">
            <label className="text-xs font-semibold text-gray-500 mb-1">When?</label>
            <DatePicker
              selected={date}
              onChange={date => setDate(date)}
              customInput={
                <input
                  type="text"
                  placeholder="Anytime"
                  className="border-none outline-none bg-transparent text-base text-gray-900 placeholder-gray-400 w-full"
                  value={date ? date.toLocaleDateString() : "Anytime"}
                  readOnly
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                />
              }
              popperPlacement="bottom"
              popperClassName="z-50"
              dateFormat="MM/dd/yyyy"
              wrapperClassName="w-full"
            />
          </div>
          <button className="flex items-center justify-center bg-white text-black font-semibold px-11 py-5 rounded-r-lg md:rounded-l-none md:rounded-r-lg hover:bg-gray-100 transition-colors text-base">
            Search <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Headline and caption */}
      <div className="absolute left-0 right-0 bottom-0 z-30 flex flex-col md:flex-row items-end justify-between px-8 pb-8 w-full">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg mb-5">
            Find a space.<br />Fulfill your vision.
          </h1>
        </div>
        {/* <div className="text-right">
          <div className="text-white text-sm font-semibold mb-1">Meeting — Splendid loft</div>
          <div className="text-white text-xs tracking-wide">PARIS, FR</div>
        </div> */}
      </div>
    </section>
  );
} 