import { useLanguage } from "../../hooks/useLanguage";

const LANGS = ["de", "en"];

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 p-1">
      {LANGS.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            language === lang ? "bg-brand text-white" : ""
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
