"use client";
import { useEffect, useState } from "react";
import { getData } from "../services/apiCurrentPrices/axiosCurrentPrice";
import { CoinDataProps } from "../services/apiCurrentPrices/axiosCurrentPrice";

export default function Card({ symbol, currency }: CoinDataProps) {
  const [Price, setPrice] = useState<null | number>(null);

  useEffect(() => {
    const getResponse = async (): Promise<void> => {
      try {
        const resp: number = await getData({ symbol, currency });
        console.log(resp);
        setPrice(resp);
      } catch (error: any) {
        console.error("Error:", error);
      }
    };
    getResponse();

    const counter3Minutes: number = 3 * 60 * 1000;
    const intervalId = setInterval(getResponse, counter3Minutes);
    return () => clearInterval(intervalId);
  }, [symbol, currency]);

  return <div>{Price !== null ? <h3>{Price}$</h3> : <p>Loading...</p>}</div>;
}
