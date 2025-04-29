
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const formspreeEndpoint = `https://formspree.io/f/${process.env.FORMSPREE_ID}`;

  try {
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Message sent successfully!" });
    } else {
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
