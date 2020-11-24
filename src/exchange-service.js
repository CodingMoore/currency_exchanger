export class ExchangeApi {
  static async apiCall(baseCur) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCur}`);
      console.log("There has been an API call!");
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error;
    }
  }
}