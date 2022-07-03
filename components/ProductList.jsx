import Link from "next/link";
import styles from "../styles/ProductList.module.css";
import ProductCart from "./ProductCart";

const ProductList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Picos katalogas
        </h1>
        <p className={styles.desc}>
            Šiuo metu populiaru:
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
            <Link href="/pizzas">
            <a className={styles.loadMore} href="#">
              Rodyti daugiau
            </a>
            </Link>
        </div>
    </div>
  )
}

export default ProductList