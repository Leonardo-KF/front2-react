import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LoadingProvider } from "./context/loadingContext.tsx";
import { Router } from "./Router.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoadingProvider>
      <Router />
    </LoadingProvider>
  </React.StrictMode>
);
