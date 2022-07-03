import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import HamburgerMenu, { Links } from '../components/Hamburger.jsx'

const Navbar = () => {

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.item}>
        <div className='max-w-full h-12 flex justify-start items-center bg-black text-white rounded-md '>
            <div className='hidden lg:flex'>
                <Links />
            </div>
        </div>
        </div>
        <div className={styles.containerflex}>
          <div className={styles.item}>
            <div className={styles.logo}>
              <a href="#">
                <Image src="/img/logo.png" alt="logo" width="200" height="40"/>
              </a>
            </div>
          </div>
          <div className={styles.flx}>
            <div className={styles.item}>
            <div className={styles.callButton}>
              <Image src="/img/icon-phone.svg" alt="phone-logo" width="18" height="18"/>
            </div>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="cart" width="18" height="18"/>
              <div className={styles.cartnumber}>2</div>
            </div>
            </div>
            <div className='flex flex-hmbgr lg:hidden'><HamburgerMenu /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar