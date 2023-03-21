import Image from "next/image";
import styles from "../../styles/PizzaCard.module.css";


const Product2 = () => {
  return (
       
      <div className={styles.container}>
      <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/5907951b8bf848b2b3bf0ead39b84ab1_760x760.webp" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        test
      </p>
    </div>
  );
};

export default Product2;
