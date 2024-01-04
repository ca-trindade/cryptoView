import getData from "../services/axios";

export default async function Card() {
    const response = await getData();
    console.log({response})
  return (
    <div>{response?.solana?.usd}</div>
  )
}
