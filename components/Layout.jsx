import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
