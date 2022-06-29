import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/img/logoblack.png" objectFit="cover" width="210" height="40"  alt="bg"/>
      </div>
      <div className={styles.items}>
        <div className={styles.cartWrap}>
        <div className={styles.cart}>
          <div className={styles.listTitle}>
            Kontaktai
          </div>
          <ul className={styles.list}>
            <li>
              Zardininku g. 4-16
            </li>
            <li>
              Klaipeda
            </li>
            <li>
              +37069376333
            </li>
          </ul>
        </div>
        </div>
        <div className={styles.cartWrap}>
        <div className={styles.cart}>
        <div className={styles.listTitle}>
            Darbo Laikas
          </div>
          <ul className={styles.list}>
            <li>
              I - IV 10.00 - 22.00
            </li>
            <li>
              V 10.00 - 23.00
            </li>
            <li>
              VI 11.00 - 22.00
            </li>
            <li>
              VII 11.00 - 20.00
            </li>
          </ul>
        </div>
        </div>
        <div className={styles.cartWrap}>
          <div className={styles.cart}>
            <div className={styles.listTitle}>
              Pasekite mus soc. tinkluose!
            </div>
            <ul className={styles.list}>
            <a href="https://www.facebook.com">
              <Image src="/img/fb.svg" width="16" height="30" alt="fb-logo" objectFit="cover" />
            </a>
            <a href="https://www.instagram.com">
              <Image src="/img/ig.svg" width="30" height="30" alt="ig-logo" objectFit="cover" />
            </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer