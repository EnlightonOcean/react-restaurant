import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ErrorBoundary  } from "react-error-boundary";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const DevTools = React.lazy(() => import("./mocks/DevTools"));
const useDevTools = import.meta.env.VITE_ENABLE_DEVTOOLS === "Y";

const queryClient =new QueryClient();


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Oops</h1>}>
    <QueryClientProvider  client={ queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <BrowserRouter>
        <Toaster />
        {useDevTools ?<DevTools/> : <App />}
      </BrowserRouter>
      
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
