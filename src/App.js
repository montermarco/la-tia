import React from "react";
import GlobalStyle from "./utils/styles/GlobalStyle";
import Header from "./components/header/Header";
import Menu from "./pages/menu/Menu";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
