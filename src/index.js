import React from "react";
import ReactDOM from "react-dom";
// React Query Essentials
import { QueryClient, QueryClientProvider } from "react-query";

// Devtools to monitor our data fetched
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";

// React Query Config
const queryClient = new QueryClient(); // Global Store Instance

ReactDOM.render(
  // Provide access to Global Store
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>

    {/* DevTools Setup */}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById("root")
);
