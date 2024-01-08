import axios, { AxiosResponse } from "axios";

interface CoinData {
  solana: {
    usd: number;
  };
  bitcoin: {
    usd: number;
  };
}

export const getDataSol = async (): Promise<CoinData> => {
  try {
    const response: AxiosResponse<CoinData> = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
    throw error;
  }
};

export const getDataBtc = async (): Promise<CoinData> => {
  try {
    const response: AxiosResponse<CoinData> = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
    throw error;
  }
};
