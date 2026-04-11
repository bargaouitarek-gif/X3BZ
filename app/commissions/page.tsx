"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [ventes, setVentes] = useState<any[]>([]);
  const [horsdep, setHorsdep] = useState<any[]>([]);
  const [bonus, setBonus] = useState("");

  useEffect(() => {
    const v = localStorage.getItem("x3bz_ventes");
    const h = localStorage.getItem("horsdep");

    if (v) setVentes(JSON.parse(v));
    if (h) setHorsdep(JSON.parse(h));
  }, []);

  // 🔥 CALCULS

  const commissionsVentes = ventes.reduce((total, v) => {
    return total + 100; // valeur simple pour l’instant (on ajustera après)
  }, 0);

  const commissionsInstallations = ventes.reduce((total, v) => {
    if (v.installationFaiteParMoi === "Oui") {
      return total + 50; // exemple
    }
    return total;
  }, 0);

  const totalHorsdep = horsdep.reduce((a, b) => a + b.gain, 0);

  const totalGlobal =
    commissionsVentes +
    commissionsInstallations +
    totalHorsdep +
    Number(bonus || 0);

  return (
    <main style={{ padding: 20 }}>
      <h1>Commissions</h1>

      <h2>Commissions ventes : {commissionsVentes} €</h2>
      <h2>Commissions installations : {commissionsInstallations} €</h2>
      <h2>Installations HORSDEP : {totalHorsdep} €</h2>

      <div>
        <h3>Bonus manuel</h3>
        <input
          placeholder="Bonus €"
          value={bonus}
          onChange={(e) => setBonus(e.target.value)}
        />
      </div>

      <h1>Total : {totalGlobal} €</h1>
    </main>
  );
}
