interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  copyrightText: string;
  links?: FooterLink[];
}

export default function Footer({ copyrightText, links = [] }: FooterProps) {
  return (
    <footer className="border-top mt-auto py-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <p className="mb-0 text-muted small">{copyrightText}</p>
        {links.length > 0 && (
          <div className="d-flex gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted text-decoration-none small"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
