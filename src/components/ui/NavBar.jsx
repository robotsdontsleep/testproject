const links = [
  "Home",
  "Unsere SimplyHUB Tools",
  "Funktionen",
  "Medien",
  "Kontakt",
];

function NavBar() {
  return (
    <nav>
      <ul className="flex items-center gap-2 text-xs font-medium text-slate-700">
        {links.map((label) => (
          <li key={label}>
            <span className="transition hover:text-brand">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
