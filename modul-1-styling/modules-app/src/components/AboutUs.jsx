import "./AboutUs.css";
import background from "../assets/background2.png";

export const AboutUs = () => (
  <section className="aboutus">
    <div
      className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "left",
        backgroundPositionY: "center",
      }}
    >
      <div className="container-text">
        <h1 className="heading">About Us</h1>
        <p className="paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
          accusamus laboriosam, ipsa dicta repellat ullam hic dolorum incidunt
          et pariatur perferendis obcaecati? Lorem, ipsum dolor. commodi
          excepturi.
        </p>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          facere nostrum natus hic eaque, alias ab officia quo iure minus dicta
          magni aperiam, qui ipsam?
        </p>
      </div>
    </div>
  </section>
);
