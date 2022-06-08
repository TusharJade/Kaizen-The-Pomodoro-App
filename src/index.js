import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { TaskContextProvider } from "./context/task-context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <TaskContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
