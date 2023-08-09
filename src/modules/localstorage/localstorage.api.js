class LocalStorage {
	saveToLocalStorage = (name, data) => {
		try {
			const existingData = localStorage.getItem(name);

			let dataArray = [];

			if (existingData) {
				dataArray = JSON.parse(existingData);
			}

			dataArray.push(data);

			localStorage.setItem(name, JSON.stringify(dataArray));
		} catch (e) {
			console.warn(e);
		}
	};

	loadFromLocalStorage = name => {
		try {
			const dataFromLS = localStorage.getItem(name);

			if (dataFromLS === null) return undefined;
			return JSON.parse(dataFromLS);
		} catch (e) {
			console.warn(e);
			return undefined;
		}
	};
}

export default LocalStorage;
