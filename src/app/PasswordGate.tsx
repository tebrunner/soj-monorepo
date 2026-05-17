import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'soj-gate-unlocked';
const EXPECTED_HASH = import.meta.env.VITE_GATE_PASSWORD_HASH as string | undefined;

async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(
    () => typeof sessionStorage !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === '1',
  );
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!EXPECTED_HASH || unlocked) return;
    const match = window.location.hash.match(/(?:^#|&)k=([^&]+)/);
    if (!match) return;
    const candidate = decodeURIComponent(match[1]);
    sha256(candidate).then((hash) => {
      if (hash === EXPECTED_HASH) {
        sessionStorage.setItem(STORAGE_KEY, '1');
        setUnlocked(true);
      }
      const cleaned = window.location.hash.replace(/(?:^#|&)k=[^&]+/, '').replace(/^#&/, '#');
      const newHash = cleaned === '#' ? '' : cleaned;
      window.history.replaceState(null, '', window.location.pathname + window.location.search + newHash);
    });
  }, [unlocked]);

  if (!EXPECTED_HASH || unlocked) return <>{children}</>;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(false);
    const hash = await sha256(value);
    if (hash === EXPECTED_HASH) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setUnlocked(true);
    } else {
      setError(true);
      setValue('');
    }
    setPending(false);
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold">ShotOfJoy OS</h1>
        <p className="text-white/60 text-sm">Enter password to continue.</p>
        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-fuchsia-500"
          aria-invalid={error}
        />
        {error && <p className="text-fuchsia-400 text-sm">Incorrect password.</p>}
        <button
          type="submit"
          disabled={pending || !value}
          className="w-full rounded-md bg-fuchsia-500 hover:bg-fuchsia-400 disabled:opacity-50 text-white font-semibold py-2 transition"
        >
          {pending ? 'Checking…' : 'Unlock'}
        </button>
      </form>
    </div>
  );
}
