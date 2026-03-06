import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface SidebarProps {
  title: string;
  navLinks: NavLink[];
}

export default function Sidebar({ title, navLinks }: SidebarProps) {
  return (
    <aside className="sidebar-fixed bg-light border-end">
      <div className="p-3">
        <h5 className="mb-4">{title}</h5>
        <nav className="nav flex-column">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="nav-link text-dark"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
