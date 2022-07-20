import React from "react";
import RouteProvider from "./routes/routes";
import LunchFormContextProvider from "./context/LunchFormContext";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <LunchFormContextProvider>
        <RouteProvider />
      </LunchFormContextProvider>
    </AuthContextProvider>
  );
}

export default App;
