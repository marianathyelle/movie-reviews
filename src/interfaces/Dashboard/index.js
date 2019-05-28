import React from 'react';
import { Container, PageHeader } from './styles';
import { Loading } from '../../components/Loading';
import useReviews from '../../logic-hooks/useReviews';

export const DashboardInterface = () => {
  const stateReviews = useReviews();
  return(
    <Container>
      <PageHeader>
        <h1>Movie Reviews</h1>
        <p>Our film critics on blockbusters, independents and everything in between.</p>
      </PageHeader>
      {stateReviews.isLoading ? (
        <Loading />
      ) : stateReviews.reviews && stateReviews.reviews.map(item => (
        <li key={item.display_title}>{item.display_title}</li>
      ))}
    </Container>
  )
}