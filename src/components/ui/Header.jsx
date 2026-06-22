import logo from "./logo.png";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="w-full border-b border-slate-100 bg-white px-gutter py-4 md:px-gutter-md lg:px-gutter-lg">
      <div className="mx-auto flex max-w-content items-center justify-between gap-8">
        <img src={logo} alt="Logo" className="h-6 w-auto" />
        <div className="hidden lg:block">
          <NavBar />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher />
          <Button className="h-input px-5 bg-brand text-white shadow-brand hover:bg-brand-dark">
            Demo buchen
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
