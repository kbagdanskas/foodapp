import Image from 'next/image';
import styles from "../../styles/Product.module.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

const Product = ({product}) => {
    const [price, setPrice] = useState(product.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch();

    const changePrice = (number) => {
        setPrice(price+number)
    }

    const handleSize = (sizeIndex)=>{
        const difference = product.prices[sizeIndex] - product.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    }

    const handleChange = (e,option) => {
        const checked = e.target.checked;

        if (checked) {
            changePrice(option.price)
            setExtras((prev)=>[...prev, option]);
        } else {
            changePrice(-option.price)
            setExtras(extras.filter((extra)=>extra._id !== option._id));
        };
    };

    const handleClick = () => {
        dispatch(addProduct({...product,extras, price, quantity}))
    };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={product.img} layout="fill" alt =""/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{product.title}</h1>
            <span className={styles.price}>${price}</span>
            <p className={styles.desc}>{product.desc}</p>
            <div className={styles.choose}>Pasirinkite dydį</div>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={()=>handleSize(0)}>
                    <Image src="/img/pizzasize.svg" layout='fill' alt="size"/>
                    <span className={styles.number}>Maža</span>
                </div>
                <div className={styles.size} onClick={()=>handleSize(1)}>
                    <Image src="/img/pizzasize.svg" layout='fill' alt="size"/>
                    <span className={styles.number}>Vidutinė</span>
                </div>
                <div className={styles.size} onClick={()=>handleSize(2)}>
                    <Image src="/img/pizzasize.svg" layout='fill' alt="size"/>
                    <span className={styles.number}>Didelė</span>
                </div>
            </div>
            <h3 className={styles.choose}>Pasirinkite papildomų ingridientų</h3>
            <div className={styles.ingredients}>
                {product.extraOptions.map(option=>(
                    <div className={styles.option} key={option._id}>
                    <input type="checkbox"
                    name={option.text}
                    id={option.text}
                    className={styles.checkbox}
                    onChange={(e)=>handleChange(e,option)}
                    />
                    <label htmlFor="garlic">{option.text}</label>
                </div>
                ))}
            </div>
            <div className={styles.add}>
                <input onChange={(e) => setQuantity(e.target.value)}
                type="number"
                defaultValue={1}
                min="0"
                onPaste={preventPasteNegative}
                onKeyPress={preventMinus}
                className={styles.quantity}/>
                <button className={styles.button} onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    </div>
  );
};

const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = parseFloat(clipboardData.getData('text'));

    if (pastedData < 0) {
        e.preventDefault();
    }
};

const preventMinus = (e) => {
    if (e.code === 'Minus') {
        e.preventDefault();
    }
};


export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
        props: {
            product: res.data,
        },
    };
};


export default Product;