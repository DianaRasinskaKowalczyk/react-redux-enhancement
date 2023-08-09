import types from "./localstorage.types";
import LocalStorage from "./localstorage.api";

const apiLS = new LocalStorage();

export const saveDataAction = data => {
	return {
		type: types.SAVE_DATA,
		payload: data,
	};
};

export const loadDataFromLS =
	(name = "localStorageData") =>
	dispatch => {
		apiLS
			.loadFromLocalStorage(name)
			.then(resp => dispatch(saveDataAction(resp)));
	};
