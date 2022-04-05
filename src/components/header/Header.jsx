import React from "react";
import Logo from "./Logo";
import "../../styles/header.css";
import ListHeader from "./ListHeader";
import SearchBarHeader from "./SearchBarHeader";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Logo />
        <ListHeader />
        <SearchBarHeader />
      </nav>
    </header>
  );
}

export default Header;
