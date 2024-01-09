// "use client";
import SolanaCard from "@/components/Cards/SolanaCard";
import BitcoinCard from "@/components/Cards/BitcoinCard";
import styles from "./page.module.css";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <main className={styles.main}>
        <Suspense fallback={<h3>Loading...</h3>}>
          <SolanaCard />
        </Suspense>
        <Suspense fallback={<h3>Loading...</h3>}>
          <BitcoinCard />
        </Suspense>
      </main>
    </>
  );
}
