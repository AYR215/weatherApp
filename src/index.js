import React from "react";
import ReactDom from "react-dom/client";

import App from "./components/App";

ReactDom.createRoot(document.querySelector("#root")).render(<React.StrictMode><App /></React.StrictMode>);
