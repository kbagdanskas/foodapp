import styles from "../styles/ProductList.module.css";
import ProductCart from "./ProductCart";

const ProductList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Karsciausios picos siuo metu!
        </h1>
        <p className={styles.desc}>
            Geriausia pica mieste
        </p>
        <div className={styles.wrapper}>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
        </div>
    </div>
  )
}

export default ProductList