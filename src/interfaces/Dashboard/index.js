import React from 'react';
import { Container, PageHeader } from './styles';
import { Loading } from '../../components/Loading';
import { ReviewList } from '../../components/ReviewList';
import useReviews from '../../logic-hooks/useReviews';

export const DashboardInterface = () => {
  const { state } = useReviews();
  return(
    <Container>
      <PageHeader>
        <h1>Movie Reviews</h1>
        <p>Our film critics on blockbusters, independents and everything in between.</p>
      </PageHeader>
      {state.isLoading ? <Loading /> : <ReviewList reviews={state.reviews}/>}
    </Container>
  )
}