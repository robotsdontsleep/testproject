import React from "react";

export const LanguageContext = React.createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState("de");

  const value = React.useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
