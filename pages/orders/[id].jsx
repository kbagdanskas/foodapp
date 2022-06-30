import Image from 'next/image';
import React from 'react';
import styles from "../../styles/Order.module.css";

const Order = () => {
    const status = 0;

    const statusClass = (index) => {
        if(index-status <1) return styles.done
        if(index-status ===1) return styles.inProgress
        if(index-status >1) return styles.undone
    };
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                <tr className={styles.tbodyTr}>
                    <td>
                        <span className={styles.id}>11313\311\1\</span>
                    </td>
                    <td>
                        <span className={styles.name}>John Way</span>
                    </td>
                    <td>
                        <span className={styles.address}>Slengiai, Klaipeda</span>
                    </td>
                    <td>
                        <span className={styles.total}>40$</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" width={30} height={30} alt=""/>
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checkmark.svg" width={20} height={20} alt=""/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/paid.png" width={30} height={30} alt=""/>
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checkmark.svg" width={20} height={20} alt=""/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/img/delivery.png" width={30} height={30} alt=""/>
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checkmark.svg" width={20} height={20} alt=""/>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/img/delivered.png" width={30} height={30} alt=""/>
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checkmark.svg" width={20} height={20} alt=""/>
                    </div>
                </div>
            </div>
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
                <button disabled className={styles.button}>Sumoketa</button>
            </div>
        </div>
    </div>
  )
}

export default Order;