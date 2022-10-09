import React from "react";
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import history from "./services/history";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Routes from "./routes";

export default () => {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container"/>
    </Router>
  )
}
