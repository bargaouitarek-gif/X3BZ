"use client";

import { useState } from "react";

type Installation = {
  id: number;
  client: string;
  ville: string;
  expert: string;
  gain: number;
};

export default function Page() {
  const [client, setClient] = useState("");
  const [ville, setVille] = useState("");
  const [expert, setExpert] = useState("");
  const [gain, setGain] = useState("");
  const [installations, setInstallations] = useState<Installation[]>([]);

  function ajouterInstallation() {
    if (!client || !ville || !expert || !gain) return;

    const nouvelleInstallation: Installation = {
      id: Date.now(),
      client,
      ville,
      expert,
      gain: Number(gain),
    };

    setInstallations([nouvelleInstallation, ...installations]);

    setClient("");
    setVille("");
    setExpert("");
    setGain("");
  }

  const total = installations.reduce((acc, i) => acc + i.gain, 0);

  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Installations HORSDEP</h1>

      <h2>Ajouter une installation</h2>

      <input
        placeholder="Nom du client"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />

      <input
        placeholder="Ville"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
      />

      <input
        placeholder="Expert vendeur"
        value={expert}
        onChange={(e) => setExpert(e.target.value)}
      />

      <input
        placeholder="Gain €"
        value={gain}
        onChange={(e) => setGain(e.target.value)}
      />

      <button onClick={ajouterInstallation}>Ajouter</button>

      <h2>Total installations HORSDEP : {total} €</h2>

      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Ville</th>
            <th>Expert vendeur</th>
            <th>Gain</th>
          </tr>
        </thead>

        <tbody>
          {installations.map((i) => (
            <tr key={i.id}>
              <td>{i.client}</td>
              <td>{i.ville}</td>
              <td>{i.expert}</td>
              <td>{i.gain} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
