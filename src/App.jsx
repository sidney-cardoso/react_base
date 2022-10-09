import React from "react";

import Login from './pages/Login'
import GlobalStyles from "./styles/global";
import Header from "./components/Header";

export default () => {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyles />
    </>
  )
}
