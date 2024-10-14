import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => props.theme.color};
`;

export const Text = () => {
  return (
    <Paragraph>
      W SOFTIQ realizujemy nasze pasje związane z nowymi technologiami. Łączymy
      doświadczenie, wiedzę i energię w działaniu. Podczas tworzenia projektów
      stawiamy na współpracę, a swoje działania koncentrujemy na kliencie.
    </Paragraph>
  );
};
