import React from 'react';
import { Review } from '../Review';
import { List } from './styles';

export const ReviewList = ({ reviews }) => {
  return(
    <List>
      {reviews && reviews.map(review => (
        <Review data={review} key={review.display_title}/>
      ))}
    </List>
  )
};