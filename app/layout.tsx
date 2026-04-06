import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "X3BZ",
  description: "Cockpit commercial X3BZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#f5f7fb",
          color: "#111827",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <aside
            style={{
              width: "240px",
              background: "#111827",
              color: "white",
              padding: "24px 16px",
              boxSizing: "border-box",
            }}
          >
            <h1 style={{ marginTop: 0, fontSize: "32px" }}>X3BZ</h1>
            <p style={{ color: "#cbd5e1", marginBottom: "24px" }}>
              Cockpit commercial
            </p>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <MenuLink href="/">Dashboard</MenuLink>
              <MenuLink href="/ventes">Ventes</MenuLink>
              <MenuLink href="/installations-horsdep">
                Installations HORSDEP
              </MenuLink>
              <MenuLink href="/commissions">Commissions</MenuLink>
              <MenuLink href="/clients">Clients</MenuLink>
            </nav>
          </aside>

          <main
            style={{
              flex: 1,
              padding: "24px",
              boxSizing: "border-box",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

function MenuLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        padding: "12px 14px",
        borderRadius: "10px",
        textDecoration: "none",
        color: "white",
        background: "rgba(255,255,255,0.06)",
      }}
    >
      {children}
    </Link>
  );
}
