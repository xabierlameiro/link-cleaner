import { useState } from 'react';
import { cleanUrl } from '../utils/cleanUrl';

interface Props {
  onClean: (clean: string) => void;
}

export default function UrlInput({ onClean }: Props) {
  const [value, setValue] = useState('');

  function handleClean() {
    const cleaned = cleanUrl(value);
    onClean(cleaned);
    setValue('');
    const history = JSON.parse(localStorage.getItem('history') || '[]');
    history.unshift(cleaned);
    localStorage.setItem('history', JSON.stringify(history.slice(0, 10)));
  }

  return (
    <div className="flex gap-2 w-full">
      <input
        type="text"
        className="flex-1 border rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Pega tu URL"
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleClean}
      >
        Limpiar
      </button>
    </div>
  );
}
