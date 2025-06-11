import { useState } from 'react';
import UrlInput from './UrlInput';
import ResultCard from './ResultCard';
import History from './History';

export default function App() {
  const [result, setResult] = useState('');
  return (
    <>
      <UrlInput onClean={setResult} />
      <ResultCard url={result} />
      <History />
    </>
  );
}
