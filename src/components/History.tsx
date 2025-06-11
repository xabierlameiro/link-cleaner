import { useEffect, useState } from 'react';

export default function History() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('history') || '[]');
    setItems(stored);
  }, []);

  if (!items.length) return null;

  return (
    <div className="mt-6">
      <h2 className="font-semibold mb-2">Historial</h2>
      <ul className="space-y-1">
        {items.map((url, i) => (
          <li key={i} className="text-sm break-all text-gray-600 dark:text-gray-300">
            {url}
          </li>
        ))}
      </ul>
    </div>
  );
}
