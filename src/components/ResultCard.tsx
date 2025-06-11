import { useState } from 'react';

interface Props {
  url: string;
}

export default function ResultCard({ url }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (!url) return null;

  return (
    <div className="mt-4 p-4 border rounded dark:bg-gray-800">
      <p className="break-all text-blue-600 dark:text-blue-400">{url}</p>
      <button
        className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
        onClick={copy}
      >
        {copied ? '¡Copiado!' : 'Copiar'}
      </button>
    </div>
  );
}
