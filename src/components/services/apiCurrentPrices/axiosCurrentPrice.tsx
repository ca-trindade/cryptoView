import axios from "axios";

export interface CoinData {
  solana: {
    usd: number;
  };
  bitcoin: {
    usd: number;
  };
}

export interface CoinDataProps {
  symbol: string,
  currency: string
}

export const getData = async ({symbol, currency}: CoinDataProps): Promise<number> => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=${currency}`
    );
    return response.data[symbol][currency];
  } catch (error: any) {
    console.error("Error:", error);
    throw error;
  }
};

