import React from "react";
import { Container } from "./styles";
import { useStateValue } from "../../state";

export const ReviewInterface = props => {
  const { id } = props.match.params;
  const [{ reviews }, dispatch] = useStateValue();

  React.useEffect(() => {
    dispatch({
      type: "GETDETAIL",
      id
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h1>{reviews.review.payload.display_title}</h1>
    </Container>
  );
};
