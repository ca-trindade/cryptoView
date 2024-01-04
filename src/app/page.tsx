// "use client";
import Card from "@/components/card/Card";
import styles from "./page.module.css";
import { Suspense } from "react";


export default async function Home() {

  
  return <>

    <main className={styles.main}>
      {<Suspense fallback={<h3>Loading...</h3>}>
        <Card />
      </Suspense>}
    </main>
  </>
}
