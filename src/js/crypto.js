export default class CryptoService {  
  static async getCoin() {
    try {
      let url = `https://api.nomics.com/v1/currencies/ticker?ids=&interval=1d,30d&per-page=100&page=1&key=${process.env.API_KEY}`;
      const response = await fetch (url);
      if (!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}