import Image from 'next/image'
import React from 'react'
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <thead>
                <tr className={styles.tr}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/hawaii.png" alt="pizza" layout='fill' objectFit='cover'/>
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>Coralzo</span>
                    </td>
                    <td>
                        <span className={styles.extras}>Spicy sauce</span>
                    </td>
                    <td>
                        <span className={styles.price}>20$</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>40$</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/hawaii.png" alt="pizza" layout='fill' objectFit='fill'/>
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>Coralzo</span>
                    </td>
                    <td>
                        <span className={styles.extras}>Spicy sauce</span>
                    </td>
                    <td>
                        <span className={styles.price}>20$</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>40$</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/hawaii.png" alt="pizza" layout='fill' objectFit='cover'/>
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>Coralzo</span>
                    </td>
                    <td>
                        <span className={styles.extras}>Spicy sauce</span>
                    </td>
                    <td>
                        <span className={styles.price}>20$</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>40$</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal</b>$80
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount</b>$0
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total</b>$80
                </div>
                <button className={styles.button}>Pateikti</button>
            </div>
        </div>
    </div>
  )
}

export default Cart