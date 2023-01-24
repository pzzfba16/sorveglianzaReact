import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Avvocati from "./components/avvocati/Avvocati";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Avvocati />
      <Footer />
    </div>
  );
}

export default App;
