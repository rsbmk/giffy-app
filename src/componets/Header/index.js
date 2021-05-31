import React from "react";
import { Link } from "wouter";
import Search from "../Search";
import DarkMode from '../DarkMode'
import "./styles.css";

export function Header() {
  return (
    <div className="containerHeader">
      <div className="wrapTitle-DarkMode">
        <Link className="title" to="/giffy-app/">
          Giffy
        </Link>
        <DarkMode/>
      </div>
      <Search />
    </div>
  );
}

export default React.memo(Header);
