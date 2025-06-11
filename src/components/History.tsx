import { useEffect, useState } from 'react';

export default function History() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('history') || '[]');
    setItems(stored);
  }, []);

  async function copy(url: string) {
    await navigator.clipboard.writeText(url);
  }

  function clear() {
    localStorage.removeItem('history');
    setItems([]);
  }

  if (!items.length) return null;

  return (
    <div className="mt-6">
      <h2 className="font-semibold mb-2">Historial</h2>
      <ul className="space-y-1">
        {items.map((url, i) => (
          <li key={i}>
            <button
              onClick={() => copy(url)}
              className="text-sm break-all text-blue-600 hover:underline dark:text-blue-400"
            >
              {url}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="mt-2 text-sm text-red-600 hover:underline"
        onClick={clear}
      >
        Limpiar historial
      </button>
    </div>
  );
}
