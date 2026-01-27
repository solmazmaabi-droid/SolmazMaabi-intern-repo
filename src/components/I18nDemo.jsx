import { useTranslation } from "react-i18next";
import Button from "./Button";

function I18nDemo() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ padding: 16 }}>
      <h2>{t("welcome")}</h2>
      <p>{t("description")}</p>

      <p style={{ marginTop: 12 }}>{t("changeLanguage")}:</p>

      <div style={{ display: "flex", gap: 8 }}>
        <Button onClick={() => i18n.changeLanguage("en")}>English</Button>
        <Button onClick={() => i18n.changeLanguage("fa")}>فارسی</Button>
      </div>
    </div>
  );
}

export default I18nDemo;
