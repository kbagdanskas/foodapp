import { useState } from 'react'
import styles from "../styles/OrderDetail.module.css"

const OrderDetail = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

const handleCancel = (event) => {
  event.currentTarget.classList.remove(
    'container',
    'wrapper',
    'my-class-3',
  );
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <span onClick={handleCancel} className={styles.close}>
          X
        </span>
        <h1 className={styles.title}>Turėsite sumokėti kurjeriui</h1>
        <div className={styles.item}>
          <label className={styles.label}>Vardas</label>
          <input
            placeholder="Vardenis"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Tel. numeris</label>
          <input
            type="text"
            placeholder="+370 60 000000"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Adresas</label>
          <textarea
            rows={5}
            placeholder="Vėjo g. 14-6"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Pateikti
        </button>
      </div>
    </div>
  );
};

export default OrderDetail