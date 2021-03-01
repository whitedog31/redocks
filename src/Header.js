import React, { useContext } from "react";
import { UserContext } from "./context";

export default function Header() {
  // 생성한 UserContext를 useContext완 연결
  const {
    user: { name, loggedIn },
  } = useContext(UserContext);
  // console.log("name", name);
  return (
    <header>
      <a href="#">Home</a> Hello {name}, you re{" "}
      {loggedIn ? "logged in " : "anonymous"}
    </header>
  );
}
