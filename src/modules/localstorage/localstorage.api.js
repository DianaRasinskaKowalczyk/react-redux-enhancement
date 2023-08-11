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
			return dataArray;
			
		} catch (e) {
			console.warn(e);
		}
	};

	loadFromLocalStorage = name => {
		
			const dataFromLS = localStorage.getItem(name);

			if (dataFromLS) {
				return JSON.parse(dataFromLS);
			}

			return [];
	
	};
}

export default LocalStorage;
