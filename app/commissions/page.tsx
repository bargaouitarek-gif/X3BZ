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
  const commissionsVentes = 0;
  const commissionsPacks = 0;
  const commissionsInstallations = 0;
  const primesPaliers = 0;
  const bonus = 0;

  const [installationsHorsdep, setInstallationsHorsdep] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("installationsHorsdep");
    if (data) {
      const installations: Installation[] = JSON.parse(data);
      const total = installations.reduce((acc, item) => acc + item.gain, 0);
      setInstallationsHorsdep(total);
    }
  }, []);

  const totalMois =
    commissionsVentes +
    commissionsPacks +
    commissionsInstallations +
    installationsHorsdep +
    primesPaliers +
    bonus;

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
          <h1 style={{ margin: 0, fontSize: "32px" }}>Commissions</h1>
          <p style={{ marginTop: "10px", color: "#d1d5db" }}>
            Vue complète de tes revenus du mois
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
          <Carte titre="Commissions ventes" valeur={commissionsVentes} />
          <Carte titre="Commissions packs" valeur={commissionsPacks} />
          <Carte titre="Commissions installations" valeur={commissionsInstallations} />
          <Carte titre="Installations HORSDEP" valeur={installationsHorsdep} />
          <Carte titre="Primes paliers" valeur={primesPaliers} />
          <Carte titre="Bonus" valeur={bonus} />
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
            Total du mois
          </p>
          <h2 style={{ margin: "10px 0 0 0", fontSize: "36px" }}>
            {totalMois} €
          </h2>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Détail du mois</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ textAlign: "left", color: "#6b7280" }}>
                <th style={{ padding: "12px" }}>Catégorie</th>
                <th style={{ padding: "12px" }}>Montant</th>
              </tr>
            </thead>
            <tbody>
              <Ligne titre="Commissions ventes" valeur={commissionsVentes} />
              <Ligne titre="Commissions packs" valeur={commissionsPacks} />
              <Ligne titre="Commissions installations" valeur={commissionsInstallations} />
              <Ligne titre="Installations HORSDEP" valeur={installationsHorsdep} />
              <Ligne titre="Primes paliers" valeur={primesPaliers} />
              <Ligne titre="Bonus" valeur={bonus} />
              <tr style={{ borderTop: "2px solid #d1d5db", fontWeight: "bold" }}>
                <td style={{ padding: "12px" }}>Total du mois</td>
                <td style={{ padding: "12px" }}>{totalMois} €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

function Carte({ titre, valeur }: { titre: string; valeur: number }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      }}
    >
      <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>{titre}</p>
      <h2 style={{ margin: "10px 0 0 0", fontSize: "28px" }}>{valeur} €</h2>
    </div>
  );
}

function Ligne({ titre, valeur }: { titre: string; valeur: number }) {
  return (
    <tr style={{ borderTop: "1px solid #e5e7eb" }}>
      <td style={{ padding: "12px" }}>{titre}</td>
      <td style={{ padding: "12px" }}>{valeur} €</td>
    </tr>
  );
}
