// pages/_app.js
import React from "react";
import App, { Container } from "next/app";
// import Layout from "../components/Layout";
// import { LocaleProvider } from "../context/LocaleContext";
import { ThemeProvider } from "../context/ComponentContext";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      // <LocaleProvider>
      <ThemeProvider>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </ThemeProvider>
      // </LocaleProvider>
    );
  }
}

export default MyApp;
