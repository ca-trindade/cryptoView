import axios from "axios";

export const getRange = async (): Promise<void> => {
  try {
    const response: number[] = await axios.get(
      "https://api.coingecko.com/api/v3/coins/solana/ohlc?vs_currency=usd&days=365"
    );
    console.log({ response });
  } catch (error: any) {
    console.error("Error:", error);
    throw error;
  }
};
