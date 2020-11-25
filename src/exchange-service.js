export class ExchangeApi {
  static async apiCall(baseCur) {
    try {
      // console.log(`${baseCur}`);
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCur}`);
      console.log("There has been an API call!");
      if(!response.ok) {
        // console.log("An Error has been thrown!");
        throw Error(response.statusText);
      }
      // console.log(response);
      return response.json();
    } catch(error) {
      // console.log("There has been an error!");
      return error;
    }
  }
}