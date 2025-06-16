"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Home() {
  const { isSignedIn, user } = useUser();
  const [topic, setTopic] = useState("");

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">🎙️ PodPilot</h1>
      {isSignedIn ? (
        <p className="mb-2">Welcome back, {user?.firstName || "friend"}!</p>
      ) : (
        <p className="mb-2">Please sign in to use PodPilot.</p>
      )}
      <input
        type="text"
        placeholder="Enter topic"
        className="border rounded px-4 py-2 w-full max-w-md"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
    </main>
  );
}
