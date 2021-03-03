import React from "react";
import Screen from "./Screen";
// import UserContextProvider from "./context";
import LangContextProvider from "./langContext";
import translations from "./translations";
// App에 들어있는 모든 것들을 ContextProvider 내부에 위치 필요
export default function App() {
  // const [user] = useState({
  //   name: "Minsu",
  // });

  return (
    <LangContextProvider defaultLang="en" translations={translations}>
      <Screen />
    </LangContextProvider>
  );
}
