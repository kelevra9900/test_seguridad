import React, { Fragment } from "react";
import Head from 'next/head';

import Header from "../common/components/Components/Header/headerContainer";
import Footer from "../common/components/Components/Footer/FooterContainer";
import Dashboard from "./dashboard";

export default function Home() {
  return (
    <Fragment>
              <Head>
          <title>Seguridad en Seguridad</title>
          <meta name="theme-color" content="#0d386c" />
          <meta name="description" content="Guía de Seguridad" />
          <meta
            name="keywords"
            content="Seguridad en América"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
      <Header />
      <Dashboard />
      <Footer />
    </Fragment>
  );
}
