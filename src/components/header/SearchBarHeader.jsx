import React from "react";

function SearchBarHeader() {
  return (
    <>
      <div className="header__search">
        <input
          type="text"
          className="header__search_input"
          placeholder="Поиск медицинского оборудования"
        />
        <button className="header__search_btn">НАЙТИ</button>
      </div>
    </>
  );
}

export default SearchBarHeader;
