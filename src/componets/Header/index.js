import React from "react";
import "./headerStyles.css";

import { Link } from "wouter";

const Search = React.lazy(()=> import("../Search")) ;
const DarkMode = React.lazy(()=> import("../DarkMode")) ;

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
