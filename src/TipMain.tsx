import React from "react";
import "./TipMain.css";

function TipMain() {
  function handleClick(response: any) {
    console.log(response);
    return null;
  }
  return (
    <div className="container-sm tip-container">
      <div className="row p-4">
        <div className="col-sm-6 ps-0 pe-4 py-2">
          <h2>Bill</h2>
          <input type="text" value="$" className="w-100" />
          <h2 className="mt-4">Select Tip %</h2>
          <div>
            <div className="d-flex gap-2 mb-2">
              <button className="btn tip-btn w-100" onClick={handleClick}>
                5%
              </button>
              <button className="btn tip-btn w-100" onClick={handleClick}>
                10%
              </button>
              <button className="btn tip-btn w-100" onClick={handleClick}>
                15%
              </button>
            </div>
            <div className="d-flex gap-2">
              <button className="btn tip-btn w-100" onClick={handleClick}>
                25%
              </button>
              <button className="btn tip-btn w-100" onClick={handleClick}>
                50%
              </button>
              <button className="btn w-100 custom-btn" onClick={handleClick}>
                Custom
              </button>
            </div>
          </div>
          <div>
            <h2 className="mt-4">Number of People</h2>
            <input type="text" value="#" className="w-100" />
          </div>
        </div>

        <div className="col-sm-6 dark-background d-flex flex-column justify-content-between py-4 ">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="mb-0">Tip Amount</h3>
              <h4>/ person</h4>
            </div>
            <div className="col text-end">
              <div className="totals">$0.00</div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">
              <h3 className="mb-0">Total</h3>
              <h4>/ person</h4>
            </div>
            <div className="col text-end">
              <div className="totals">$0.00</div>
            </div>
          </div>
          <div>
            <button className="btn reset-btn w-100">RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipMain;
