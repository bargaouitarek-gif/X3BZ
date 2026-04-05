"use client";
import { useState } from "react";

export default function Page() {
  const [client, setClient] = useState("");
  const [type, setType] = useState("Particulier");
  const [ville, setVille] = useState("");
  const [montant, setMontant] = useState("");
  const [ventes, setVentes] = useState<any[]>([]);

  function ajouterVente() {
    if (!client) return;

    const nouvelleVente = {
      client,
      type,
      ville,
      montant,
    };

    setVentes([...ventes, nouvelleVente]);

    setClient("");
    setVille("");
    setMontant("");
  }

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Gestion des ventes</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Nom client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ marginLeft: 10 }}
        >
          <option>Particulier</option>
          <option>Professionnel</option>
        </select>

        <input
          placeholder="Ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          style={{ marginLeft: 10 }}
        />

        <input
          placeholder="Montant €"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          style={{ marginLeft: 10 }}
        />

        <button onClick={ajouterVente} style={{ marginLeft: 10 }}>
          Ajouter
        </button>
      </div>

      <h2>Ventes enregistrées</h2>

      {ventes.map((v, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          {v.client} - {v.type} - {v.ville} - {v.montant}€
        </div>
      ))}
    </div>
  );
}
