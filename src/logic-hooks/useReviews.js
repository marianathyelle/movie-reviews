import { useState, useEffect } from 'react';
import { API_URL, params } from '../services';
import { useStateValue } from '../state';

export default function useReviews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [{reviews}, dispatch] = useStateValue();

  useEffect(() => {
    getReviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getReviews() {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/reviews/picks.json?order=${params.order}&api-key=${params["api-key"]}`)
      const data = await response.json();
      dispatch({
        type: 'getReviews',
        reviews: data.results
      })
    } catch(error) {
      setError(error)
    } finally {
      setLoading(false);
    }
  }

  return { reviews, loading, error };
}