import React from "react";
import { Header } from "./Header";

export const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
