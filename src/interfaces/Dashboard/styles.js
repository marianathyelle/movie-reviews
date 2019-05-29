import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PageHeader = styled.div`
  margin-bottom: 60px;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
  
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    color: #6D6D6D;
  }
`;
