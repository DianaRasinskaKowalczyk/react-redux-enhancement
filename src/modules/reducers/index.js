import reducerCurrency from "../exchangeApi/exchangeApi.reducer";
import reducerForm from "../localstorage/localstorage.reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
	currency: reducerCurrency,
	form: reducerForm,
});

export default reducers;
