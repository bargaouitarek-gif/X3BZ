"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Client = {
  id: number;
  numero: string;
  nom: string;
  telephone: string;
  mail: string;
  adresse: string;
  codePostal: string;
  ville: string;
  type: string;
};

export default function Page() {
  const [numero, setNumero] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mail, setMail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [type, setType] = useState("Particulier");

  const [clients, setClients] = useState<Client[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("clientsX3BZ");
    if (data) {
      setClients(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("clientsX3BZ", JSON.stringify(clients));
  }, [clients]);

  function ajouterClient() {
    if (!numero.trim() || !nom.trim()) return;

    const nouveauClient: Client = {
      id: Date.now(),
      numero: numero.trim(),
      nom: nom.trim(),
      telephone: telephone.trim(),
      mail: mail.trim(),
      adresse: adresse.trim(),
      codePostal: codePostal.trim(),
      ville: ville.trim(),
      type,
    };

    setClients([nouveauClient, ...clients]);

    setNumero("");
    setNom("");
    setTelephone("");
    setMail("");
    setAdresse("");
    setCodePostal("");
    setVille("");
    setType("Particulier");
  }

  const clientsFiltres = clients.filter((c) =>
    `${c.numero} ${c.nom} ${c.telephone} ${c.mail} ${c.adresse} ${c.codePostal} ${c.ville}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <h1>Clients</h1>

      <input
        placeholder="Recherche numéro, nom, téléphone, mail, adresse, ville..."
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
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
          placeholder="Adresse"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />

        <input
          placeholder="Code postal"
          value={codePostal}
          onChange={(e) => setCodePostal(e.target.value)}
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
      </div>

      <button
        onClick={ajouterClient}
        style={{
          marginBottom: "20px",
          padding: "10px 14px",
          borderRadius: "8px",
          border: "none",
          background: "#111827",
          color: "white",
          cursor: "pointer",
        }}
      >
        Ajouter
      </button>

      <div style={{ overflowX: "auto" }}>
        <table width="100%" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", color: "#6b7280" }}>
              <th style={{ padding: "10px" }}>Numéro</th>
              <th style={{ padding: "10px" }}>Nom</th>
              <th style={{ padding: "10px" }}>Ville</th>
              <th style={{ padding: "10px" }}>Téléphone</th>
              <th style={{ padding: "10px" }}>Type</th>
            </tr>
          </thead>

          <tbody>
            {clientsFiltres.map((c) => (
              <tr key={c.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={{ padding: "10px" }}>
                  <Link href={`/clients/${c.numero}`}>{c.numero}</Link>
                </td>
                <td style={{ padding: "10px" }}>
                  <Link href={`/clients/${c.numero}`}>{c.nom}</Link>
                </td>
                <td style={{ padding: "10px" }}>{c.ville}</td>
                <td style={{ padding: "10px" }}>{c.telephone}</td>
                <td style={{ padding: "10px" }}>{c.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
