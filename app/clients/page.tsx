"use client";

import { useState } from "react";

type Client = {
  id: number;
  numero: string;
  nom: string;
  telephone: string;
  mail: string;
  ville: string;
  type: string;
};

export default function Page() {
  const [numero, setNumero] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mail, setMail] = useState("");
  const [ville, setVille] = useState("");
  const [type, setType] = useState("Particulier");

  const [clients, setClients] = useState<Client[]>([]);
  const [search, setSearch] = useState("");

  function ajouterClient() {
    if (!numero.trim() || !nom.trim()) return;

    const nouveauClient: Client = {
      id: Date.now(),
      numero,
      nom,
      telephone,
      mail,
      ville,
      type,
    };

    setClients([nouveauClient, ...clients]);

    setNumero("");
    setNom("");
    setTelephone("");
    setMail("");
    setVille("");
    setType("Particulier");
  }

  const clientsFiltres = clients.filter((c) =>
    `${c.numero} ${c.nom} ${c.telephone} ${c.mail} ${c.ville}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <h1>Clients</h1>

      <input
        placeholder="Recherche numéro, nom, téléphone, mail, ville..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Numéro client"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <input
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <input
          placeholder="Téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />

        <input
          placeholder="Mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <input
          placeholder="Ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Particulier</option>
          <option>Professionnel</option>
        </select>

        <button onClick={ajouterClient}>Ajouter</button>
      </div>

      <table width="100%">
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Nom</th>
            <th>Ville</th>
            <th>Téléphone</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {clientsFiltres.map((c) => (
            <tr key={c.id}>
              <td>{c.numero}</td>
              <td>{c.nom}</td>
              <td>{c.ville}</td>
              <td>{c.telephone}</td>
              <td>{c.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
