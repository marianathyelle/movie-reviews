import React from 'react';
import { Container } from './styles';
import useReviews from '../../logic-hooks/useReviews';

export const ReviewInterface = (props) => {
  const { id } = props.match.params;
  const { state, getReviewDetail } = useReviews();

  React.useLayoutEffect(() => {
    getReviewDetail(id);
  }, [getReviewDetail, id]);

  return (
    <Container>
      <h1>{state.review.display_title}</h1>
    </Container>
  );
}