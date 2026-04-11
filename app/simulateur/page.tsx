"use client";

import { useState } from "react";

export default function Page() {
  const [budget, setBudget] = useState("");
  const [packs, setPacks] = useState("");
  const [abo, setAbo] = useState("");
  const [resultat, setResultat] = useState<any>(null);

  function simuler() {
    let commission = 70;
    let details: string[] = [];

    // PACKS
    if (packs.toLowerCase().includes("bac")) {
      commission += 50;
      details.push("+50€ BAC");
    }

    if (packs.toLowerCase().includes("aquila")) {
      commission += 30;
      details.push("+30€ Aquila");
    }

    // CODES ABO
    if (abo.includes("ABO5")) {
      commission -= 35;
      details.push("-35€ ABO5");
    }

    if (abo.includes("ABO7")) {
      commission -= 45;
      details.push("-45€ ABO7");
    }

    if (abo.includes("3MO")) {
      commission -= 20;
      details.push("-20€ 3MO");
    }

    if (abo.includes("6MO")) {
      commission -= 40;
      details.push("-40€ 6MO");
    }

    // CONSEIL
    let conseil = "";
    if (commission < 100) {
      conseil = "❌ Mauvaise config → trop de remise ou pas assez de packs";
    } else if (commission < 150) {
      conseil = "⚠️ Correct mais optimisable";
    } else {
      conseil = "🔥 Très bon choix → bonne config";
    }

    // 🔥 MEILLEURE CONFIG (base intelligente simple)
    let best = 70;
    let bestText = "👉 Ajoute des packs pour augmenter ta commission";

    if (!packs.toLowerCase().includes("bac")) {
      best += 50;
      bestText = "👉 Ajoute BAC pour +50€";
    }

    if (!packs.toLowerCase().includes("aquila")) {
      best += 30;
      bestText += " + Aquila pour +30€";
    }

    setResultat({
      commission,
      details,
      conseil,
      best,
      bestText,
    });
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Simulateur intelligent</h1>

      <input
        placeholder="Budget client (ex: 60€)"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Packs (ex: BAC, Aquila)"
        value={packs}
        onChange={(e) => setPacks(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Codes ABO (ex: ABO5, 3MO)"
        value={abo}
        onChange={(e) => setAbo(e.target.value)}
      />

      <br /><br />

      <button onClick={simuler}>Simuler</button>

      {resultat && (
        <div style={{ marginTop: 20 }}>
          <h2>💰 Commission estimée : {resultat.commission} €</h2>

          <ul>
            {resultat.details.map((d: string, i: number) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <h3>{resultat.conseil}</h3>

          <hr />

          <h3>🔥 Meilleure config possible : {resultat.best} €</h3>
          <p>{resultat.bestText}</p>
        </div>
      )}
    </main>
  );
          }
