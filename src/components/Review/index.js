import React from 'react';
import { Container, Content, Item } from './styles';
const moment = require('moment');

export const Review = ({ data }) => (
  <Container>
    <Item to={`/review/${data.display_title}`}>
      <span>{moment(data.publication_date).format('ll')}</span>
        <Content>
          <h3>{data.display_title}</h3>
          <p>
            {data.summary_short}
          </p>
        </Content>
      <img src={data.multimedia.src} alt={data.display_title} />
    </Item>
  </Container>
)