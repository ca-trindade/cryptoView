"use client";
import { useEffect, useState } from "react";
import { getDataSol } from "../services/axios";


export default function Card() {
const [solanaPrice, setSolanaPrice] = useState<number>(0)

  useEffect(() => {
    const getResponse = async () => {
      try {
        const resp = await getDataSol();
        console.log(resp);
        setSolanaPrice(resp);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getResponse();

    const intervalId = setInterval(getResponse, 3 * 60 * 1000);
    return () => clearInterval(intervalId);
  },[])

  return (
    <div>
      {solanaPrice}
    </div>
  );
}
