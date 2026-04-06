"use client";

import { useState } from "react";

export default function Page() {
  const [commissionsVentes] = useState(0);
  const [installationsHorsdep] = useState(0);

  const total = commissionsVentes + installationsHorsdep;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
        color: "#111827",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            background: "#111827",
            color: "white",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "32px" }}>Commissions</h1>
          <p style={{ marginTop: "10px", color: "#d1d5db" }}>
            Suivi de tes revenus commerciaux
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ color: "#6b7280" }}>Commissions ventes</p>
            <h2>{commissionsVentes} €</h2>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ color: "#6b7280" }}>Installations HORSDEP</p>
            <h2>{installationsHorsdep} €</h2>
          </div>

          <div
            style={{
              background: "#111827",
              color: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <p>Total commissions</p>
            <h2>{total} €</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
