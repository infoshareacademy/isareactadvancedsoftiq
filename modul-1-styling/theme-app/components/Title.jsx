import styled from "styled-components";

export const Heading = styled.h1`
  color: ${(props) => props.theme.color};
`;

export const Title = () => {
  return <Heading>S_O_F_T_I_Q</Heading>;
};
