import React from 'react';
import { Container } from './styles';
import { useStateValue } from '../../state';

export const ReviewInterface = (props) => {
  const { id } = props.match.params;
  const [{review}, dispatch] = useStateValue();

  React.useEffect(() => {
    dispatch({
      type: 'getDetail',
      id
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Container>
      {console.log(review)}
    </Container>
  );
}