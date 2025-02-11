import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header.jsx";
// import Main from './Main.jsx'
// import Footerfrom './Footer.jsx'

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Header />
		// <Main />
		// <Footer />
	</StrictMode>
);
