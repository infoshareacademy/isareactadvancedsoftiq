import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation, Trans } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <LanguageSwitcher />
      <h1>{t("welcome", { siteName: "Sotfiq" })}</h1>
      <Trans i18nKey="description">
        To get started, <a href="https://softiq.pl/">click here</a>
      </Trans>
      <Trans
        i18nKey="description"
        components={{ 1: <a href="https://softiq.pl/" /> }}
      />
    </div>
  );
}

export default App;
