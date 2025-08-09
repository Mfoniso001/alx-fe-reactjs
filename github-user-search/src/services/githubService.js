import axios from 'axios';

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items;
  } catch (error) {
    console.error('GitHub search error:', error);
    return [];
  }
};
