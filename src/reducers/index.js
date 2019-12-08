export const initialState = {
  reviews: {
    allReviews: {
      payload: [],
      isLoading: false,
      errors: undefined
    },
    review: {
      payload: {},
      isLoading: false,
      errors: undefined
    }
  }
};

export const mainReducer = ({ reviews }, action) => ({
  reviews: reducerReviews(reviews, action)
});

export const reducerReviews = (state, action) => {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        allReviews: {
          ...state.allReviews,
          isLoading: true
        }
      };

    case "SUCCESS":
      return {
        ...state,
        allReviews: {
          ...state.allReviews,
          payload: action.payload,
          isLoading: false
        }
      };

    case "ERROR":
      return {
        ...state,
        allReviews: {
          ...state.allReviews,
          errors: action.payload,
          isLoading: false
        }
      };

    case "GETDETAIL":
      return {
        ...state,
        review: {
          ...state.review,
          payload: state.allReviews.payload.find(
            item => item.display_title === action.id
          )
        }
      };

    case "ERRORDETAIL":
      return {
        ...state,
        review: {
          ...state.review,
          errors: action.payload,
          isLoading: false
        }
      };

    default:
      return state;
  }
};
