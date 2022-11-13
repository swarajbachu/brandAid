import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BrandAid from '../components/brandaid'
import styles from '../styles/Home.module.css'

const Home: NextPage =() =>{
  return (
    <div className={styles.container}>
      <Head>
        <title>BrandAid | Ai Generated Marketing</title>
        <meta name="description" content="Generate snippits for your" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrandAid/>
    </div>
  )
}

export default Home;
