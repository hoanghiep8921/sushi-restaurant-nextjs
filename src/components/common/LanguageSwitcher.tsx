"use client";
import { useState } from 'react';

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // In a real app, you'd use a library like i18next to change the language
    console.log(`Language changed to ${lang}`);
  };

  return (
    <div className={`flex items-center space-x-1 text-sm font-medium ${className}`}>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2 py-1 transition-colors ${language === 'en' ? 'text-accent' : 'text-white hover:text-accent/80'}`}>
        EN
      </button>
      <span className="text-white/50">|</span>
      <button
        onClick={() => handleLanguageChange('vi')}
        className={`px-2 py-1 transition-colors ${language === 'vi' ? 'text-accent' : 'text-white hover:text-accent/80'}`}>
        VI
      </button>
    </div>
  );
};

export default LanguageSwitcher;
