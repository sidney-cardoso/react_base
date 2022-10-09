import React from "react";
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Routes from "./routes";

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  )
}
