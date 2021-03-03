import React, { useState, useContext, createContext } from "react";

const LangContext = createContext();

const LangContextProvider = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  // console.log("lang", lang);

  const hyperTranslate = (text) => {
    // en -> es
    // lang : en
    // defaultLang : en
    // text : hello
    if (lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };

  console.log("t", translations["es"]["Hello!"]);

  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useSetLang = () => {
  // naming을 hook처럼 만들어야 useContext가 red가 안됨
  // changeLang => useSetLang
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
};

export default LangContextProvider;
