import React from "react";
import { useSetLang, useT } from "./langContext";
// import Header from "./Header";
// import { useFns } from "./context";

export default function Screen() {
  // const { logUserIn } = useFns();

  // useSetLang이라는 일종의 custom hook을 가져와서 자체 함수로 사용
  const setLang = useSetLang();
  const t = useT();
  return (
    <div>
      {/* <Header /> */}
      {/* <h1>Hello!</h1> */}
      <h1>{t("Hello!")}</h1>
      {/* <button onClick  ={logUserIn}> Log User in</button> */}

      <button onClick={() => setLang("es")}>{t("Translate")}</button>
    </div>
  );
}
