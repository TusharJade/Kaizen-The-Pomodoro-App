import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { TaskContextProvider } from "./context/task-context";
import { ClockContextProvider } from "./context/clock-context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <TaskContextProvider>
      <ClockContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClockContextProvider>
    </TaskContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
