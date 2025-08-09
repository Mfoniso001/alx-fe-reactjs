import { useState } from 'react';
import { searchUsers } from '../services/githubService';

export default function Search({ onResults }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = `${username} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`.trim();
    const users = await searchUsers(query);
    onResults(users);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search username"
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Filter by location"
        className="p-2 border rounded"
      />
      <input
        type="number"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        placeholder="Minimum repositories"
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}
