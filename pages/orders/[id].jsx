import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import styles from "../../styles/Order.module.css";

const Order = ({order}) => {
    const status = order.status;

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
                        <span className={styles.id}>{order._id}</span>
                    </td>
                    <td>
                        <span className={styles.name}>{order.customer}</span>
                    </td>
                    <td>
                        <span className={styles.address}>{order.address}</span>
                    </td>
                    <td>
                        <span className={styles.total}>${order.total}</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" width={30} height={30} alt=""/>
                    <span>Apmokėjimas</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checkmark.svg" width={20} height={20} alt=""/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/paid.png" width={30} height={30} alt=""/>
                    <span>Ruošiama</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checkmark.svg" width={20} height={20} alt=""/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/img/delivery.png" width={30} height={30} alt=""/>
                    <span>Pakeliui</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checkmark.svg" width={20} height={20} alt=""/>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/img/delivered.png" width={30} height={30} alt=""/>
                    <span>Pristatyta</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checkmark.svg" width={20} height={20} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Krepšelio suma</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Kaina:</b>${order.total}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Nuolaida</b>$0
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Iš viso:</b>${order.total}
                </div>
                <button disabled className={styles.button}>Sumoketa</button>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
    return {
        props: {
            order: res.data,
        },
    };
};

export default Order;