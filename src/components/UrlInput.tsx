import { useState } from 'react';
import { cleanUrl } from '../utils/cleanUrl';

interface Props {
  onClean: (clean: string) => void;
}

export default function UrlInput({ onClean }: Props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function isValidUrl(url: string) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  function handleClean() {
    if (!value.trim() || !isValidUrl(value)) {
      setError('Ingresa una URL válida');
      return;
    }

    const cleaned = cleanUrl(value);
    onClean(cleaned);
    setValue('');
    setError('');
    const history = JSON.parse(localStorage.getItem('history') || '[]');
    history.unshift(cleaned);
    localStorage.setItem('history', JSON.stringify(history.slice(0, 10)));
  }

  const disabled = !value.trim() || !isValidUrl(value);

  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex gap-2 w-full">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError('');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleClean();
          }}
          placeholder="Pega tu URL"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleClean}
          disabled={disabled}
        >
          Limpiar
        </button>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
}
