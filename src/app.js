import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import Form from "./components/Form/Form";

const root = createRoot(document.querySelector("#root"));
root.render(
	<>
		<App />
		<Form />
	</>
);
