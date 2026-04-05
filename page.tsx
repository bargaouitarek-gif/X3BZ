export default function Page() {
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
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#111827",
            color: "white",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "32px" }}>X3BZ</h1>
          <p style={{ marginTop: "10px", fontSize: "16px", color: "#d1d5db" }}>
            Dashboard commercial Verisure
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
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
            <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
              Ventes du mois
            </p>
            <h2 style={{ margin: "10px 0 0 0", fontSize: "28px" }}>12</h2>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
              Commissions estimées
            </p>
            <h2 style={{ margin: "10px 0 0 0", fontSize: "28px" }}>4 250 €</h2>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
              RDV pris
            </p>
            <h2 style={{ margin: "10px 0 0 0", fontSize: "28px" }}>31</h2>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
              Taux de transformation
            </p>
            <h2 style={{ margin: "10px 0 0 0", fontSize: "28px" }}>38%</h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
            <h3 style={{ marginTop: 0 }}>Ventes</h3>
            <p style={{ color: "#4b5563" }}>
              Suivi des ventes signées, posées et payées.
            </p>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Commissions</h3>
            <p style={{ color: "#4b5563" }}>
              Estimation du salaire, commissions et projection de fin de mois.
            </p>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>DCO</h3>
            <p style={{ color: "#4b5563" }}>
              Contrôle des données commerciales et détection d’écarts.
            </p>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Prospection</h3>
            <p style={{ color: "#4b5563" }}>
              Gestion des prospects, relances et suivi commercial.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
