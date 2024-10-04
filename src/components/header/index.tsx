import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import lock from "../../assets/icons/lock.svg";
import hamburgermenu from "../../assets/icons/hamburgermenu.svg";
import PrimaryBtn from "../button/Primary";
import useIsMobileView from './../../hooks/useIsMobileView';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobileView = useIsMobileView()
  const Divider = () => (
    <div style={{ height: "1px", width: "100%", background: "lightgray" }} />
  );

  if (menuOpen) {
    return (
      <div
        onClickCapture={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          padding: "10px 20px",
          zIndex: 10,
          background: "white",
          height: "100vh",
          width: "100%",
        }}
      >
        <Image src={logo} width={131} height={29} alt="logo" />
        <div
          className="nav__items"
          style={{ marginTop: "20px", flexDirection: "column", gap: "20px" }}
        >
          <h3>Features</h3>
          <Divider />
          <h3>Pricing</h3>
          <Divider />
          <h3>
            <Image src={lock} alt="" />
            Login
          </h3>
          <Divider />
          <div style={{ textAlign: "center" }}>
            <PrimaryBtn>Try for free</PrimaryBtn>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        maxWidth: "1200px",
        padding: "10px 20px",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="logo">
        <Image src={logo} width={131} alt="logo" />
      </div>
      {isMobileView ? (
        <div onClick={() => setMenuOpen(true)}>
          <Image src={hamburgermenu} alt="menu" />
        </div>
      ) : (
        <div className="nav__items">
          <h3>Features</h3>
          <h3>Pricing</h3>
          <h3>
            <Image src={lock} alt="" />
            Login
          </h3>

          <PrimaryBtn>Try for free</PrimaryBtn>
        </div>
      )}
    </div>
  );
};

export default Header;
