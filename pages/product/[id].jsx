import Image from 'next/image';
import styles from "../../styles/Product.module.css";
import { useState } from "react";

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/img/hawaii.png",
        name: "Hawaii",
        price: [19.9, 23.9, 27.9],
        desc: "Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, konservuoti ananasai, vištiena, švelnus saldžiarūgštis padažas, augalinis aliejus su česnaku",
    };
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" alt =""/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <div className={styles.choose}>Choose the size</div>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={()=>setSize(0)}>
                    <Image src="/img/pizzasize.svg" layout='fill' alt="size"/>
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={()=>setSize(1)}>
                    <Image src="/img/pizzasize.svg" layout='fill' alt="size"/>
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={()=>setSize(2)}>
                    <Image src="/img/pizzasize.svg" layout='fill' alt="size"/>
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Pasirinkite papildomų ingridientų</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type="checkbox" name="garlic" id="garlic" className={styles.checkbox}/>
                    <label htmlFor="garlic">Česnakinis padažas</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" name="cheese" id="cheese" className={styles.checkbox}/>
                    <label htmlFor="cheese">Papildomas sluoksnis sūrio</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" name="spicy" id="spicy" className={styles.checkbox}/>
                    <label htmlFor="spicy">Pikantiškas padažas</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" name="honey" id="honey" className={styles.checkbox}/>
                    <label htmlFor="honey">Medaus - garstyčių padažas</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>
  );
};

export default Product;