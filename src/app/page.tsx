// "use client";
// import axios from "axios";
import Card from "@/components/card/Card";
import getData from "../components/services/axios"
import styles from "./page.module.css";
import { Suspense } from "react";


// const getData = async () => {
//   const response = await axios.get(
//     "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
//   );
//   return response.data;
// };



export default async function Home() {
  // const response = await getData();
  
  // console.log(response)
  
  return <>

    <main className={styles.main}>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Card />
      </Suspense>
    </main>
  </>
}
