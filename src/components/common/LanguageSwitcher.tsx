"use client";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language || 'en';

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={`flex items-center space-x-1 text-sm font-medium ${className}`}>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2 py-1 transition-colors ${currentLanguage === 'en' ? 'text-accent' : 'text-white hover:text-accent/80'}`}>
        EN
      </button>
      <span className="text-white/50">|</span>
      <button
        onClick={() => handleLanguageChange('vi')}
        className={`px-2 py-1 transition-colors ${currentLanguage === 'vi' ? 'text-accent' : 'text-white hover:text-accent/80'}`}>
        VI
      </button>
    </div>
  );
};

export default LanguageSwitcher;
