import { useState } from 'react';
import Search from './components/Search';

export default function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center p-6">GitHub User Search</h1>
      <Search onResults={setResults} />
      <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {results.map(user => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-xl text-center mt-2">{user.login}</h2>
            <p className="text-center">
              <a href={user.html_url} className="text-blue-600" target="_blank" rel="noreferrer">View Profile</a>
            </p>
          </div>
        ))}
        {results.length === 0 && <p className="text-center col-span-full">Looks like we can't find the user</p>}
      </div>
    </div>
  );
}
