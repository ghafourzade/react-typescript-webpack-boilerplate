import clsx from "clsx";
import useTranslation from "hooks/useTranslation";
import { LanguageTypes } from "interfaces/Languages/languages";
import React, { FC, useCallback } from "react";
import useLanguagesStore from "stores/Languages";
import { IHomeProps } from "./Home.interface";
import styles from "./Home.module.scss";

const Home: FC<IHomeProps> = ({ className, ...props }) => {
  const { t } = useTranslation();
  const { lang, switchLang } = useLanguagesStore(state => state);
  const change = useCallback(() => {
    if (lang === LanguageTypes.en) return switchLang(LanguageTypes.fa);
    return switchLang(LanguageTypes.en);
  }, [lang]);
  return (
    <div className={clsx(styles["Home"], className)} {...props}>
      <button onClick={change}>change lang</button>
      {t("HELLO_WORLD")}
    </div>
  );
};

export default Home;
