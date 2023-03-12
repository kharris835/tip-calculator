import React from "react";
import "./App.css";
import "./Footer.css";

function App() {
  function handleClick(response: any) {
    console.log(response);
    return null;
  }
  return (
    <div className="attribution">
      Coded by{" "}
      <a href="https://www.kelsielharris.com" target="_blank" rel="nonreferrer">
        Kelsie Harris
      </a>
    </div>
  );
}

export default App;
