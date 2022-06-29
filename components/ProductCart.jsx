import Image from 'next/image';
import styles from "../styles/ProductCart.module.css";

const ProductCart = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/hawaii.png" alt="" width="200" height="200" />
        <h1 className={styles.title}>Firoi</h1>
        <span className={styles.price}>20$</span>
        <p className={styles.desc}>
            Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, konservuoti ananasai, vištiena, švelnus saldžiarūgštis padažas, augalinis aliejus su česnaku
        </p>
    </div>
  )
}

export default ProductCart;