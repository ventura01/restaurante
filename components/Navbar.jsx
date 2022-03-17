import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.svg"
            alt="img-phone"
            width={24}
            height={24}
          ></Image>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>001 2248 2386</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.itemList}>Home</li>
          <li className={styles.itemList}>Products</li>
          <li className={styles.itemList}>Menu</li>
          <Image
            src="/img/pizza_logo.png"
            alt="Logo pizza"
            width={75}
            height={75}
          ></Image>
          <li className={styles.itemList}>Events</li>
          <li className={styles.itemList}>Blog</li>
          <li className={styles.itemList}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image
            src="/img/cart.svg"
            alt="Logo pizza"
            width={24}
            height={24}
          ></Image>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
