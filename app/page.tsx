export default function Page() {
  const cards = [
    { title: "Ventes du mois", value: "12", subtitle: "Objectif : 16" },
    { title: "Commissions estimées", value: "4 250 €", subtitle: "Projection fin de mois" },
    { title: "RDV pris", value: "31", subtitle: "Semaine en cours" },
    { title: "Taux de transformation", value: "38%", subtitle: "VD + VF" },
  ];

  const ventesRecentes = [
    { client: "Mme Dupont", type: "Particulier", ville: "Marseille", montant: "899 €", statut: "Signé" },
    { client: "Salon Lyna", type: "Professionnel", ville: "Vitrolles", montant: "1 290 €", statut: "Posé" },
    { client: "M. Garcia", type: "Particulier", ville: "Aix-en-Provence", montant: "749 €", statut: "Payé" },
  ];

  const relances = [
    "Rappeler Pharmacie du Centre",
    "Confirmer RDV Mme Lopez",
    "Envoyer proposition au Cabinet Dentaire Rey",
  ];

  const alertes = [
    "1 écart DCO à vérifier",
    "3 prospects chauds à relancer",
    "Objectif mensuel à 75%",
  ];

  const modules = [
    {
      title: "Ventes",
      text: "Suivi complet des ventes particuliers et professionnels, statuts, montants, historique.",
    },
    {
      title: "Commissions",
      text: "Calcul estimatif, projection fin de mois, suivi de rémunération et performance.",
    },
    {
      title: "DCO",
      text: "Contrôle des écarts, vérification des données commerciales et suivi des anomalies.",
    },
    {
      title: "Prospection",
      text: "Gestion des prospects, relances, priorités terrain et suivi commercial.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
      }}
    >
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <aside
          style={{
            width: "260px",
            background: "#111827",
            color: "white",
            padding: "24px 18px",
          }}
        >
          <div style={{ marginBottom: "32px" }}>
            <h1 style={{ margin: 0, fontSize: "28px" }}>X3BZ</h1>
            <p style={{ marginTop: "8px", color: "#cbd5e1", fontSize: "14px" }}>
              Cockpit commercial
            </p>
          </div>

          <nav style={{ display: "grid", gap: "10px" }}>
            {["Dashboard", "Ventes", "Commissions", "DCO", "Prospection", "Rendez-vous"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "12px 14px",
                  borderRadius: "10px",
                  background: item === "Dashboard" ? "#1f2937" : "transparent",
                  color: item === "Dashboard" ? "white" : "#d1d5db",
                  fontSize: "15px",
                }}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <section style={{ flex: 1, padding: "28px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #111827, #1f3b73)",
              color: "white",
              borderRadius: "18px",
              padding: "28px",
              marginBottom: "24px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "32px" }}>Dashboard X3BZ</h2>
            <p style={{ marginTop: "10px", color: "#dbeafe", fontSize: "16px" }}>
              Vue d’ensemble de ton activité commerciale Verisure
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
            {cards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>{card.title}</p>
                <h3 style={{ margin: "10px 0 6px 0", fontSize: "30px" }}>{card.value}</h3>
                <p style={{ margin: 0, fontSize: "13px", color: "#9ca3af" }}>{card.subtitle}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Ventes récentes</h3>

              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ textAlign: "left", color: "#6b7280", fontSize: "14px" }}>
                      <th style={{ padding: "10px 8px" }}>Client</th>
                      <th style={{ padding: "10px 8px" }}>Type</th>
                      <th style={{ padding: "10px 8px" }}>Ville</th>
                      <th style={{ padding: "10px 8px" }}>Montant</th>
                      <th style={{ padding: "10px 8px" }}>Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ventesRecentes.map((vente, index) => (
                      <tr key={index} style={{ borderTop: "1px solid #e5e7eb" }}>
                        <td style={{ padding: "12px 8px" }}>{vente.client}</td>
                        <td style={{ padding: "12px 8px" }}>{vente.type}</td>
                        <td style={{ padding: "12px 8px" }}>{vente.ville}</td>
                        <td style={{ padding: "12px 8px" }}>{vente.montant}</td>
                        <td style={{ padding: "12px 8px" }}>
                          <span
                            style={{
                              background:
                                vente.statut === "Payé"
                                  ? "#dcfce7"
                                  : vente.statut === "Posé"
                                  ? "#dbeafe"
                                  : "#fef3c7",
                              color:
                                vente.statut === "Payé"
                                  ? "#166534"
                                  : vente.statut === "Posé"
                                  ? "#1d4ed8"
                                  : "#92400e",
                              padding: "6px 10px",
                              borderRadius: "999px",
                              fontSize: "12px",
                              fontWeight: 700,
                            }}
                          >
                            {vente.statut}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ display: "grid", gap: "16px" }}>
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                <h3 style={{ marginTop: 0 }}>Relances du jour</h3>
                <ul style={{ paddingLeft: "18px", marginBottom: 0 }}>
                  {relances.map((item) => (
                    <li key={item} style={{ marginBottom: "10px", color: "#374151" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                <h3 style={{ marginTop: 0 }}>Alertes</h3>
                <ul style={{ paddingLeft: "18px", marginBottom: 0 }}>
                  {alertes.map((item) => (
                    <li key={item} style={{ marginBottom: "10px", color: "#374151" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {modules.map((module) => (
              <div
                key={module.title}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                <h3 style={{ marginTop: 0 }}>{module.title}</h3>
                <p style={{ color: "#4b5563", marginBottom: 0 }}>{module.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
