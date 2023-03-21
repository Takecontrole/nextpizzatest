import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      
        <div className={styles.texts}>
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBuzisAsYO51T6_53ujbAuQe5YxyPZhCPTA&usqp=CAU" className={styles.image} alt="" width="150" height="150" background-color="#d1411e" />
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
         <Link href="/" passHref>
          <li className={styles.listItem}>Домашняя Страница</li>
          </Link>
          
          
          
          
          <li className={styles.listItem}>закажи по звонку! (8800)671010</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
      <div className={styles.item}>
        <div className={styles.cart}>
          <img src="https://assets.partpay.co.nz/assets/Images/fearless/icons/zip-icon-cart.svg" alt="" width="30" height="30" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Navbar;
