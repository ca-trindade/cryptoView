import axios from "axios";

const getData = async () => {
    try {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
        );
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados da API:", error);
        throw error;
    }
}
export default getData;
