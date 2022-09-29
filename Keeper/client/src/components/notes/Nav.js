import React from "react";
import { Link } from "react-router-dom";
import Apps from "@material-ui/icons/Apps";
import LibraryAdd from "@material-ui/icons/LibraryAdd";
import TransitEnterexitRounded from "@material-ui/icons/TransitEnterexitRounded";
import EmojiObjectsTwoTone from "@material-ui/icons/EmojiObjectsTwoTone";

export default function Nav({ setIsLogin }) {
  const logoutSubmit = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/" style={{ color: "white" }}>
            <EmojiObjectsTwoTone /> Keeper
          </Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">
            <Apps style={{ color: "white" }} />
          </Link>
        </li>
        <li>
          <Link to="/create">
            <LibraryAdd style={{ color: "white" }} />
          </Link>
        </li>
        <li onClick={logoutSubmit}>
          <Link to="/">
            <TransitEnterexitRounded style={{ color: "white" }} />
          </Link>
        </li>
      </ul>
    </header>
  );
}
