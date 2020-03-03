import React from "react";
import "./layout.css";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <section className="section">{children}</section>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
