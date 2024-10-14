import {
  Section,
  Container,
  Heading,
  ATag,
  List,
  ListItem,
  Img,
  Box,
} from "./Services.styled";
import iconCart from "../assets/icon-cart.png";
import iconHand from "../assets/icon-hand.png";
import iconWorld from "../assets/icon-world.png";
import iconCarrot from "../assets/icon-carrot.png";

export const Services = () => (
  <Section>
    <Container>
      <Heading>Our Services</Heading>
      <Box>
        <List>
          <ListItem>
            <ATag href="#" target="_self">
              OnListItemne Shopping <Img src={iconCart} alt="icon-cart" />
            </ATag>
          </ListItem>
          <ListItem>
            <ATag href="#" target="_self">
              QuaListItemty Product <Img src={iconHand} alt="icon-hand" />
            </ATag>
          </ListItem>
          <ListItem>
            <ATag href="#" target="_self">
              Domestic & International
              <br /> DeListItemvery{" "}
              <Img isWorld src={iconWorld} alt="icon-world" />
            </ATag>
          </ListItem>
          <ListItem>
            <ATag href="#" target="_self">
              Well Organized <Img src={iconCarrot} alt="icon-carrot" />
            </ATag>
          </ListItem>
        </List>
      </Box>
    </Container>
  </Section>
);
