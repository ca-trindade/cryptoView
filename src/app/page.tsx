// "use client";
import SolanaCard from "@/components/card/SolanaCard";
import BitcoinCard from "@/components/card/BitcoinCard";
import styles from "./page.module.css";
import { Suspense } from "react";


export default async function Home() {

  
  return (
    <>
      <main className={styles.main}>
        <Suspense fallback={<h3>Loading...</h3>}>
          <h1>
            Solana price: <SolanaCard />$
          </h1>
        </Suspense>
        <Suspense fallback={<h3>Loading...</h3>}>
          <h1>
            Bitcoin price: <BitcoinCard />$
          </h1>
        </Suspense>
      </main>
    </>
  );
}
