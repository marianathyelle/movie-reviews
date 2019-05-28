import { useState, useEffect } from 'react';
import { API_URL, params } from '../services';

export default function useReviews() {
  const [state, setState] = useState({
    isLoading: false, 
    reviews: [],
    error: false
  });

  async function getReviews() {
    setState({ isLoading: true })
    try {
      const response = await fetch(`${API_URL}/reviews/picks.json?order=${params.order}&api-key=${params["api-key"]}`)
      const data = await response.json();
      setState({ isLoading: false, reviews: data.results });
    } catch(error) {
      setState({ isLoading: false, error: true })
    }
  }

  useEffect(() => {
    getReviews();
    return () => void 0;
  }, []);

  return state;
}