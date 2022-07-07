import Link from "next/link";
import styles from "../styles/ProductList.module.css";
import ProductCart from "./ProductCart";

const ProductList = ({productList}) => {
  return (
    <div id="productList" className={styles.container}>
        <h1 className={styles.title}>
            Picos katalogas
        </h1>
        <p className={styles.desc}>
            Šiuo metu populiaru:
        </p>
        <div className={styles.wrapper}>
        {productList.map((product) => (
            <ProductCart key ={product._id} product={product} />
          ))}
        </div>
        <Link href="/pizzas">
            <a className={styles.loadMore} href="#">
              Rodyti daugiau
            </a>
            </Link>
    </div>
  )
}

export default ProductList