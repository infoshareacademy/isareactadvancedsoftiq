import "./Services.css";
import iconCart from "../assets/icon-cart.png";
import iconHand from "../assets/icon-hand.png";
import iconWorld from "../assets/icon-world.png";
import iconCarrot from "../assets/icon-carrot.png";

export const Services = () => (
  <section className="services">
    <div className="container">
      <h1 className="heading">Our Services</h1>
      <div className="box">
        <ul className="list">
          <li className="list-item">
            <a className="a-tag" href="#" target="_self">
              Online Shopping{" "}
              <img className="img" src={iconCart} alt="icon-cart" />
            </a>
          </li>
          <li className="list-item">
            <a className="a-tag" href="#" target="_self">
              Quality Product{" "}
              <img className="img" src={iconHand} alt="icon-hand" />
            </a>
          </li>
          <li className="list-item">
            <a className="a-tag" href="#" target="_self">
              Domestic & International
              <br /> Delivery{" "}
              <img
                className="img icon-world"
                src={iconWorld}
                alt="icon-world"
              />
            </a>
          </li>
          <li className="list-item">
            <a className="a-tag" href="#" target="_self">
              Well Organized{" "}
              <img className="img" src={iconCarrot} alt="icon-carrot" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
