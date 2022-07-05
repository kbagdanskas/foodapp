import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import HamburgerMenu, { Links } from '../components/Hamburger.jsx'
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {

  const quantity = useSelector(state=>state.cart.quantity);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.item}>
        <div className='max-w-full h-12 flex justify-start items-center text-white rounded-md '>
            <div className='hidden lg:flex'>
                <Links />
            </div>
        </div>
        </div>
        <div className={styles.containerflex}>
          <div className={styles.item}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                <Image src="/img/logo.png" alt="logo" width="200" height="40"/>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.flx}>
            <div className={styles.item}>
            <div className={styles.callButton}>
              <Image src="/img/icon-phone.svg" alt="phone-logo" width="18" height="18"/>
              <ul>
                <li><a href="tel:846444333">846444333</a></li>
              </ul>
            </div>
            <Link href="/cart" passHref>
            <div className={styles.cart}>
                <a>
                <Image src="/img/cart.png" alt="cart" width="18" height="18"/>
                </a>
              <div className={styles.cartnumber}>{quantity}</div>
            </div>
            </Link>
            </div>
            <div className='flex flex-hmbgr lg:hidden'><HamburgerMenu /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar