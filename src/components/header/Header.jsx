import React, { useEffect } from "react";
import Logo from "./Logo";
import "../../styles/header.css";
import ListHeader from "./ListHeader";
import SearchBarHeader from "./SearchBarHeader";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init();
    document.title = "Molva";
  }, []);

  return (
    <header
      className="header"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-delay="500"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1300"
    >
      <nav className="header__nav">
        <Logo />
        <ListHeader />
        <SearchBarHeader />
      </nav>
    </header>
  );
}

export default Header;
