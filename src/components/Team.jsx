import React from "react";
import "../styles/team.css";
import TeamUlList from "./team/TeamUlList";

function Team() {
  return (
    <section className="team">
      <h2 className="team__title">Команда Medford</h2>
      <p className="team__des">
        Холдинг Medford Medical Solutions Co., <br /> Ltd. (ООО “Медфорд”) был
        основан в 2009 году.
      </p>
      <p className="team__des2">Офисы:</p>
      <p className="team__des3">
        г. Москва <span>г. Санкт-Петербург</span>
      </p>

      <div className="team__statis">
        <TeamUlList />
      </div>
    </section>
  );
}

export default Team;
