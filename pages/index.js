import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Пиццерия</title>
        <meta name="description" content="Лучшая пицца в городе" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://pizza-fake.adaptable.app/products');
  const data = await res.json();

  return {
    props: { pizzaList: data }
  }
}