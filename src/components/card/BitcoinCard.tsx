import { getDataBtc } from "../services/axios";

export default async function Card() {
  const resp = await getDataBtc();
  console.log({ resp });
  return <div>{resp?.bitcoin?.usd}</div>;
}
