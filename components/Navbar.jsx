import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.item}>
          <ul className={styles.listtext}>
            <li>
              <a href="#">Gerimai</a>
            </li>
            <li>
              <a href="#">Maistas</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Gerimai</a>
            </li>
            <li>
              <a href="#">Kontaktai</a>
            </li>
          </ul>
        </div>
        <div className={styles.containerflex}>
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image src="/img/logo.png" alt="logo" width="200" height="40"/>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image src="/img/icon-phone.svg" alt="phone-logo" width="18" height="18"/>
          </div>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="cart" width="18" height="18"/>
            <div className={styles.cartnumber}>2</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar