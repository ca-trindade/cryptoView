import Card from "@/components/Cards/Card";
import styles from "./page.module.css";


export default async function Home() {
  return (
    <>
      <main className={styles.main}>
        <Card symbol="solana" currency="eur" />
        <Card symbol="bitcoin" currency="usd" />
        <Card symbol="polkadot" currency="usd" />
        <Card symbol="matic-network" currency="usd" />
        <Card symbol="near" currency="usd" />
        <Card symbol="ethereum" currency="usd" />
        <p>CoinGecko</p>
      </main>
    </>
  );
}
