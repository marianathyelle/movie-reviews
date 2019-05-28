import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 50px;
`;

export const Logo = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;
