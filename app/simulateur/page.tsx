"use client";

import { useState } from "react";

export default function Page() {
  const [budget, setBudget] = useState("");
  const [packs, setPacks] = useState("");
  const [abo, setAbo] = useState("");
  const [resultat, setResultat] = useState<any>(null);

  function simuler() {
    let commission = 70; // base START
    let details: string[] = [];

    // Packs
    if (packs.toLowerCase().includes("bac")) {
      commission += 50;
      details.push("+50€ BAC");
    }

    if (packs.toLowerCase().includes("aquila")) {
      commission += 30;
      details.push("+30€ Aquila");
    }

    // Codes ABO
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

    // Résultat final
    setResultat({
      commission,
      details,
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

      <input
        placeholder="Packs (ex: BAC, Aquila...)"
        value={packs}
        onChange={(e) => setPacks(e.target.value)}
      />

      <input
        placeholder="Codes ABO (ex: ABO5, 3MO...)"
        value={abo}
        onChange={(e) => setAbo(e.target.value)}
      />

      <button onClick={simuler}>Simuler</button>

      {resultat && (
        <div style={{ marginTop: 20 }}>
          <h2>Commission estimée : {resultat.commission} €</h2>

          <ul>
            {resultat.details.map((d: string, i: number) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
