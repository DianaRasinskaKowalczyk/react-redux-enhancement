class ExchangeApi {
	apiKey = "76ccef1cb364f105694c3075699a37eb";
	url = "http://api.exchangeratesapi.io/v1/";

	getCurrentRate() {
		return fetch(`${this.url}latest?access_key=${this.apiKey}}`).then(resp => {
			if (resp.ok) {
				console.log(resp);
				return resp.json();
			}
			throw Error(resp.status);
		});
	}

	getPastRate(purchaseDate, currency) {
		return fetch(
			`${this.url}${purchaseDate}?access_key=${this.apiKey}&base=EUR&symbols=${currency}`
		)
			.then(resp => {
				if (resp.ok) {
					console.log(resp);
					return resp.json();
				}
				throw Error(resp.status);
			})
			.then(resp => console.log(resp.rates));
	}
}

export default ExchangeApi;
