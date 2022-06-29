import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/Featured';
import ProductList from '../components/ProductList';
import ProductCart from '../components/ProductCart';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Memelio pica</title>
        <meta name="description" content="Pajurio pica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <ProductList/>
    </div>
  )
}
