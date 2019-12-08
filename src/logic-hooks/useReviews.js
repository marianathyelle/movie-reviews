import { useEffect } from "react";
import { API_URL, params } from "../services";
import { useStateValue } from "../state";

export default function useReviews() {
  const [{ reviews }, dispatch] = useStateValue();

  useEffect(() => {
    reviews.allReviews.payload.length === 0
      ? getReviews()
      : dispatch({
          type: "SUCCESS",
          payload: reviews.allReviews.payload
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getReviews() {
    dispatch({
      type: "GET"
    });
    try {
      const response = await fetch(
        `${API_URL}/reviews/picks.json?order=${params.order}&api-key=${params["api-key"]}`
      );
      const data = await response.json();
      dispatch({
        type: "SUCCESS",
        payload: data.results
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error
      });
    }
  }

  return { reviews };
}
