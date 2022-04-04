import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <><Head><title>Ninja List | Home</title></Head>
    <div >
     
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.</p>
      <p className={styles.text}>Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.</p>
      <Link href="/ninjas"> 
        <a className={styles.btn}>See Ninjas Listing</a>
      </Link>
      
    </div></>
  )
}
