"use client";

import { useEffect, useState } from "react";

type Installation = {
  id: number;
  numeroClient: string;
  installation: string;
  gain: number;
  notes: string;
};

export default function Page() {
  const [numeroClient, setNumeroClient] = useState("");
  const [installation, setInstallation] = useState("START");
  const [gain, setGain] = useState("");
  const [notes, setNotes] = useState("");
  const [installations, setInstallations] = useState<Installation[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("installationsHorsdep");
    if (data) {
      setInstallations(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("installationsHorsdep", JSON.stringify(installations));
  }, [installations]);

  function ajouterInstallation() {
    if (!numeroClient.trim() || !gain.trim()) return;

    const nouvelleInstallation: Installation = {
      id: Date.now(),
      numeroClient: numeroClient.trim(),
      installation: installation.trim(),
      gain: Number(gain),
      notes: notes.trim(),
    };

    setInstallations([nouvelleInstallation, ...installations]);

    setNumeroClient("");
    setInstallation("START");
    setGain("");
    setNotes("");
  }

  const total = installations.reduce((acc, item) => acc + item.gain, 0);

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
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            background: "#111827",
            color: "white",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "32px" }}>
            Installations HORSDEP
          </h1>
          <p style={{ marginTop: "10px", color: "#d1d5db" }}>
            Suivi des installations faites pour un autre expert sécurité
          </p>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Ajouter une installation</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            <div>
              <label style={{ display: "block", marginBottom: "6px" }}>
                Numéro client
              </label>
              <input
                value={numeroClient}
                onChange={(e) => setNumeroClient(e.target.value)}
                placeholder="Numéro client"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "6px" }}>
                Installation réalisée
              </label>
              <input
                value={installation}
                onChange={(e) => setInstallation(e.target.value)}
                placeholder="Ex : START"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "6px" }}>
                Gain (€)
              </label>
              <input
                value={gain}
                onChange={(e) => setGain(e.target.value)}
                placeholder="Ex : 60"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "6px" }}>
                Notes
              </label>
              <input
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Optionnel"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                }}
              />
            </div>
          </div>

          <button
            onClick={ajouterInstallation}
            style={{
              marginTop: "16px",
              background: "#111827",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "12px 18px",
              cursor: "pointer",
            }}
          >
            Ajouter
          </button>
        </div>

        <div
          style={{
            background: "#111827",
            color: "white",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <p style={{ margin: 0, color: "#d1d5db", fontSize: "14px" }}>
            Total installations HORSDEP
          </p>
          <h2 style={{ margin: "10px 0 0 0", fontSize: "36px" }}>{total} €</h2>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Liste des installations</h2>

          {installations.length === 0 ? (
            <p style={{ color: "#6b7280" }}>Aucune installation enregistrée.</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ textAlign: "left", color: "#6b7280" }}>
                    <th style={{ padding: "12px" }}>Numéro client</th>
                    <th style={{ padding: "12px" }}>Installation</th>
                    <th style={{ padding: "12px" }}>Gain</th>
                    <th style={{ padding: "12px" }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {installations.map((item) => (
                    <tr key={item.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                      <td style={{ padding: "12px" }}>{item.numeroClient}</td>
                      <td style={{ padding: "12px" }}>{item.installation}</td>
                      <td style={{ padding: "12px" }}>{item.gain} €</td>
                      <td style={{ padding: "12px" }}>{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
