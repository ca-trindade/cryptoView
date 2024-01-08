import { getDataSol } from "../services/axios";

export default async function Card() {
  const resp = await getDataSol();
  console.log({ resp });
  return <div>{resp?.solana?.usd}</div>;
}
