import logo from "./logo-white.png";

function Links({ listTitle = "", links = [] }) {
  return (
    <div className="w-full sm:w-auto sm:min-w-28">
      <h2 className="font-mono text-eyebrow font-normal text-white uppercase pb-2">
        {listTitle}
      </h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link}>
            <span className="text-muted font-sans text-sm font-normal leading-relaxed hover:text-white transition-colors">
              {link}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-ink px-gutter py-16 md:px-gutter-md lg:px-gutter-lg">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between items-start gap-12 lg:gap-16 w-full">
          <div className="w-full max-w-xs">
            <img src={logo} alt="logo" className="w-36 h-auto mb-6" />
            <p className="text-muted font-sans text-sm font-normal leading-relaxed">
              Ihr Partner für digitale Lösungen — Medienmanagement, CMS und
              Workflows in einer Plattform. Entwickelt von den Systempiloten in
              Köln.
            </p>
          </div>

          <Links listTitle="Unternehmen" links={["Über uns", "Lösungen", "Kontakt"]} />
          <Links listTitle="Tools" links={["SimplyHUB Media", "SimplyHUB CMS", "SimplyHUB MAM", "SimplyHUB Redaktion"]} />
          <Links listTitle="Folgen" links={["LinkedIn", "Instagram", "Impressum", "Datenschutz"]} />
        </div>

        <div className="w-full pt-8 border-t border-white/10 flex justify-center items-center">
          <p className="text-muted font-sans text-xs font-normal text-center">
            &copy; 2026 Systempiloten Thorsten Feldmann GmbH & Co. KG. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
