import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.li`
  margin-bottom: 30px;
`;

export const Item = styled(Link)`
  display: flex;
  max-width: 900px;
  color: black;

  img {
    max-width: 240px;
    height: auto;
  }

  span {
    font-size: 12px;
    color: #999999;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 946px){
    flex-direction: column;
  }
`;

export const Content = styled.div`
  margin: 0 30px 30px 30px;
  max-width: 500px;

  @media screen and (max-width: 946px){
    margin: 0 0 30px 0;
  }
`;