import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Link } from "@chakra-ui/react";
import { TfiWorld } from "react-icons/tfi";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();

  const onChangeLanguage = () => {
    const toggleLang = language === "en" ? "fr" : "en";
    i18n.changeLanguage(toggleLang);
    setLanguage(toggleLang);
  };

  return (
    <Button
      fontWeight="normal"
      size="md"
      as={Link}
      onClick={() => onChangeLanguage()}
    >
      {language === "en" ? "Francaise" : "English"}
      <span style={{ marginLeft: "10px" }}>
        <TfiWorld></TfiWorld>
      </span>
    </Button>
  );
};

export default LanguageSelector;
