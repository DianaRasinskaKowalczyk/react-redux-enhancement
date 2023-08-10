class ExchangeApi {
	// apiKey = "76ccef1cb364f105694c3075699a37eb";
	// url = "http://api.exchangeratesapi.io/v1/";

	data = {
		USD: 1.4368962,
	};

	getCurrentRate() {
		// return fetch(`${this.url}latest?access_key=${this.apiKey}`).then(resp => {
		// 	if (resp.ok) {
		// 		console.log(resp);
		// 		return resp.json();
		// 	}
		// 	throw Error(resp.status);
		// });
		return Promise.resolve(this.data)
			.then(resp => resp.USD)
			.catch(err => console.error(err))
			.finally(() => {
				console.log("Odpytywanie API zakończone!");
			});
	}

	getPastRate() {
		// return fetch(
		// 	`${this.url}${purchaseDate}?access_key=${this.apiKey}&base=EUR&symbols=${currency}`
		// )
		// 	.then(resp => {
		// 		if (resp.ok) {
		// 			console.log(resp);
		// 			return resp.json();
		// 		}
		// 		throw Error(resp.status);
		// 	})
		return Promise.resolve(this.data)
			.then(resp => resp.USD)
			.catch(err => console.error(err))
			.finally(() => {
				console.log("Odpytywanie API zakończone!");
			});
	}
}

export default ExchangeApi;
