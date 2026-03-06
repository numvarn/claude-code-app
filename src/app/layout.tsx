import type { Metadata } from "next";
import "./globals.css";
import {
  BootstrapClient,
  Navbar,
  Sidebar,
  MainContainer,
  Footer,
} from "@/components/layout";

export const metadata: Metadata = {
  title: "My App",
  description: "Bootstrap layout with Next.js",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const sidebarLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Settings", href: "/settings" },
  { label: "Profile", href: "/profile" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ display: "flex", flexDirection: "column" }}>
        <BootstrapClient />
        <Navbar brandName="My App" brandHref="/" navLinks={navLinks} />
        <div style={{ display: "flex", flex: 1 }}>
          <Sidebar title="Navigation" navLinks={sidebarLinks} />
          <MainContainer>
            {children}
          </MainContainer>
        </div>
        <Footer
          copyrightText="© 2026 My App. All rights reserved."
          links={[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ]}
        />
      </body>
    </html>
  );
}
