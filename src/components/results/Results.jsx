import React, { useState } from "react";
import "../../styles/results.css";
import Customers from "../customers/Customers";
import ResultsManufacture from "./ResultsManufacture";

function Results() {
  const [status, setStatus] = useState("results");

  const hanleTitleClick = (e) => {
    const resultStatus =
      e.target.textContent === "Производители" ? "results" : "customer";

    setStatus(resultStatus);
  };

  return (
    <section className="results">
      <div className="results__category">
        <h2
          className={
            status === "results"
              ? "resuts__category_title active"
              : "resuts__category_title"
          }
          onClick={hanleTitleClick}
        >
          Производители
        </h2>
        <h2
          className={
            status === "customer"
              ? "resuts__category_title active"
              : "resuts__category_title"
          }
          onClick={hanleTitleClick}
        >
          Заказчики
        </h2>
      </div>

      <hr className="results__hr" />

      {status === "results" ? (
        <ResultsManufacture />
      ) : status === "customer" ? (
        <Customers />
      ) : (
        ""
      )}
    </section>
  );
}

export default Results;
