import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    if (!isSignedIn) router.push('/');
  }, [isSignedIn]);

  const handleSubmit = async () => {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setAudioUrl(data.audioUrl);
  };

  if (!isSignedIn) return null;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome, {user?.firstName || 'Podcaster'}!</h1>
      <textarea
        rows={5}
        style={{ width: '100%', marginBottom: '1rem' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your episode script here..."
      />
      <button onClick={handleSubmit}>Generate Audio</button>

      {audioUrl && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Preview:</h3>
          <audio controls src={audioUrl} />
        </div>
      )}
    </main>
  );
}
