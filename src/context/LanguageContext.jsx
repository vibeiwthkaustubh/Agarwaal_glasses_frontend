import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check saved language or default to 'en'
    try {
      const saved = localStorage.getItem('ag_lang');
      return saved === 'hi' ? 'hi' : 'en';
    } catch {
      return 'en';
    }
  });

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  useEffect(() => {
    try {
      localStorage.setItem('ag_lang', language);
    } catch {
      // ignore
    }
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language] || translations.en;
  const isHindi = language === 'hi';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isHindi }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
