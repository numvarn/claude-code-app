import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brandName: string;
  brandHref?: string;
  navLinks: NavLink[];
}

export default function Navbar({
  brandName,
  brandHref = "/",
  navLinks,
}: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky">
      <div className="container-fluid">
        <Link className="navbar-brand" href={brandHref}>
          {brandName}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <Link className="nav-link" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
