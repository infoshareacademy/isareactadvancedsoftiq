import styles from "./Services.module.css";
import iconCart from "../assets/icon-cart.png";
import iconHand from "../assets/icon-hand.png";
import iconWorld from "../assets/icon-world.png";
import iconCarrot from "../assets/icon-carrot.png";

export const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Services</h1>
        <div className={styles.box}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.aTag} href="#" target="_self">
                Online Shopping{" "}
                <img className={styles.img} src={iconCart} alt="icon-cart" />
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.aTag} href="#" target="_self">
                Quality Product{" "}
                <img className={styles.img} src={iconHand} alt="icon-hand" />
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.aTag} href="#" target="_self">
                Domestic & International
                <br /> Delivery{" "}
                <img
                  className={`${styles.img} ${styles.iconWorld}`}
                  src={iconWorld}
                  alt="icon-world"
                />
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.aTag} href="#" target="_self">
                Well Organized{" "}
                <img
                  className={styles.img}
                  src={iconCarrot}
                  alt="icon-carrot"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
