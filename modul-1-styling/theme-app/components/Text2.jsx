import { withTheme } from "styled-components";

const Text = ({ theme }) => {
  return (
    <p style={{ color: theme.color }}>
      W SOFTIQ realizujemy nasze pasje związane z nowymi technologiami. Łączymy
      doświadczenie, wiedzę i energię w działaniu. Podczas tworzenia projektów
      stawiamy na współpracę, a swoje działania koncentrujemy na kliencie.
    </p>
  );
};

export const Text2 = withTheme(Text);
