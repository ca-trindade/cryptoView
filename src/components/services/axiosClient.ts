import axios from "axios";

const clientAxios = {
  baseURL:
    "https://api.coingecko.com/api/v3/simple/price?ids=btc%2Ceth%2Csol&vs_currencies=usdt",
}

export const getData = async () => {
    const response = await axios(
      "https://api.coingecko.com/api/v3/simple/price?ids=btc%2Ceth%2Csol&vs_currencies=usdt"
    );
    return response.data;
}