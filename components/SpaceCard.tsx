'use client'

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link'

interface SpaceCardProps {
  id: string
  title: string
  location: string
  price: number
  rating: number
  reviewCount: number
  capacity: string
  imageUrl: string
  category: string
}

export default function SpaceCard({
  id,
  title,
  location,
  price,
  rating,
  reviewCount,
  capacity,
  imageUrl,
  category
}: SpaceCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p- border">
        <CardItem
          translateZ="50"
          className="text-lg font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300"
        >
          {location} • {category} • {capacity} guests
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageUrl}
            height="500"
            width="500"
            className="h-25px w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href={`/spaces/${id}`}
            className="px-2 py-1 rounded-xl text-xs font-normal dark:text-white"
          >
            View Details →
          </CardItem>
          <CardItem
            translateZ={20}
            as="div"
            className="px-2 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            ${price}/hr | ⭐ {rating} ({reviewCount})
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
} 