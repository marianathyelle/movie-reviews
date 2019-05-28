import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 50px;
  margin-bottom: 50px;
  border-bottom: 1px solid #CCCCCC;
`;

export const Logo = styled(Link)`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  color: black;
`;
