class ExchangeApi {
	url = "http://api.exchangeratesapi.io/v1/";
	apiKey = "76ccef1cb364f105694c3075699a37eb";

	getData(currency) {
		return fetch(
			`${this.url}latest?access_key=${this.apiKey}&base=${currency}`
		).then(resp => {
			if (resp.ok) {
				console.log(resp);
				return resp.json();
			}
			throw Error(resp.status);
		});
	}
}

export default ExchangeApi;
