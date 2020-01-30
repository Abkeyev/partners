import React from "react";
import { Header, Main, Footer } from "./components";
import { YMInitializer } from "react-yandex-metrika";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language ? i18n.language : 'ru');

  const handleLangChange = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <YMInitializer
        accounts={[56874502]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true
        }}
      />
      <Header lang={lang} changeLang={handleLangChange}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
