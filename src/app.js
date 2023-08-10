import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import reducers from "./modules/reducers";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);

const root = createRoot(document.querySelector("#root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);