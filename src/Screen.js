import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "./context";

export default function Screen() {
  const { logUserIn } = useContext(UserContext);

  return (
    <div>
      <Header />
      <h1>First Screen</h1>
      <button onClick={logUserIn}> Log User in</button>
    </div>
  );
}
