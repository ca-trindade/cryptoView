import { getDataBtc } from "../services/axios";

export default async function Card() {
  const resp = await getDataBtc();
  console.log({ resp });
  return (
    <div>
      <h3>Bitcoin price:</h3>
      <p>{resp?.bitcoin?.usd}$</p>
    </div>
  );
}
