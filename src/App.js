import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

export const App = () => {
  const list = [
    {
      code: "en",
    },
    {
      code: "uzb",
    },
  ];

  const { t } = useTranslation();

  return (
    <h2>
      {t("hello")}
      {list.map(({ code }) => {
        return <p onClick={() => i18next.changeLanguage(code)}>{code}</p>;
      })}
    </h2>
  );
};

export default App;
