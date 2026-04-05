"use client";
import { useState } from "react";

export default function VentesPage() {
  const [ventes, setVentes] = useState([]);

  const [form, setForm] = useState({
    type: "Particulier",
    client: "",
    ville: "",
    montant: "",
    statut: "Signé",
  });

  function ajouterVente(e) {
    e.preventDefault();

    setVentes([
      ...ventes,
      {
        ...form,
        id: Date.now(),
      },
    ]);

    setForm({
      type: "Particulier",
      client: "",
      ville: "",
      montant: "",
      statut: "Signé",
    });
  }

  return (
    <main style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Module Ventes</h1>

      <form
        onSubmit={ajouterVente}
        style={{
          display: "grid",
          gap: 10,
          maxWidth: 400,
          marginBottom: 30,
        }}
      >
        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
        >
          <option>Particulier</option>
          <option>Professionnel</option>
        </select>

        <input
          placeholder="Nom du client"
          value={form.client}
          onChange={(e) =>
            setForm({ ...form, client: e.target.value })
          }
        />

        <input
          placeholder="Ville"
          value={form.ville}
          onChange={(e) =>
            setForm({ ...form, ville: e.target.value })
          }
        />

        <input
          placeholder="Montant €"
          value={form.montant}
          onChange={(e) =>
            setForm({ ...form, montant: e.target.value })
          }
        />

        <select
          value={form.statut}
          onChange={(e) =>
            setForm({ ...form, statut: e.target.value })
          }
        >
          <option>Signé</option>
          <option>Posé</option>
          <option>Payé</option>
        </select>

        <button type="submit">Ajouter la vente</button>
      </form>

      <h2>Ventes enregistrées</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Client</th>
            <th>Type</th>
            <th>Ville</th>
            <th>Montant</th>
            <th>Statut</th>
          </tr>
        </thead>

        <tbody>
          {ventes.map((v) => (
            <tr key={v.id}>
              <td>{v.client}</td>
              <td>{v.type}</td>
              <td
