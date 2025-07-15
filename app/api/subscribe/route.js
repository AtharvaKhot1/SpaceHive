export async function POST(req) {
  const { email } = await req.json();

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer re_bLetZSrd_P7oXr3HgUFC9saNGYEfJcpWs',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'no-reply@spacehive.com',
      to: email,
      subject: 'Thanks for subscribing to Space Hive!',
      html: '<strong>Welcome to Space Hive!</strong><br>Thank you for subscribing to our newsletter.'
    }),
  });

  if (res.ok) {
    return Response.json({ success: true });
  }
  return Response.json({ success: false }, { status: 400 });
} 