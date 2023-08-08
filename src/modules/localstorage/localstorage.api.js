class LocalStorageApi {
	saveToLocalStorage(name, data) {
		try {
			const existingData = localStorage.getItem(name);

			let lsDataArray = [];

			if (existingData) {
				lsDataArray = JSON.parse(existingData);
			}

			lsDataArray.push(data);
			const newData = JSON.stringify(lsDataArray);
			localStorage.setItem(name, newData);
		} catch (e) {
			console.warn(e);
		}
	}

	loadFromLocalStorage(name) {
		try {
			const dataFromLS = localStorage.getItem(name);
			if (data === null) return undefined;
			return JSON.parse(dataFromLS);
		} catch (e) {
			console.warn(e);
			return undefined;
		}
	}
}

export default LocalStorageApi;
