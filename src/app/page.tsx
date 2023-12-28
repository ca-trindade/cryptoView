// "use client";
import axios from "axios";
import styles from "./page.module.css";


const getData = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
  );
  return response.data;
};

export default async function Home() {
  const response = await getData();
  
  console.log({ response })
  
  return <main className={styles.main}>hiii</main>;
}
