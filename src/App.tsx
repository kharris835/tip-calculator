import React from "react";
import "./App.css";
import Footer from "./Footer";
import TipMain from "./TipMain";

function App() {
  function handleClick(response: any) {
    console.log(response);
    return null;
  }
  return (
    <div className="App">
      <header>
        <h1 className="text-center">
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <main>
        <TipMain />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
