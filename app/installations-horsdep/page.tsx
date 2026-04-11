"use client";

import { useEffect, useState } from "react";

type Installation = {
  id: number;
  numeroClient: string;
  installation: string;
  gain: number;
  date: string;
  notes: string;
};

export default function Page() {
  const [numeroClient, setNumeroClient] = useState("");
  const [installation, setInstallation] = useState("");
  const [gain, setGain] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [installations, setInstallations] = useState<Installation[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("horsdep");
    if (data) setInstallations(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("horsdep", JSON.stringify(installations));
  }, [installations]);

  function ajouter() {
    if (!numeroClient || !installation || !gain || !date) return;

    const newItem: Installation = {
      id: Date.now(),
      numeroClient,
      installation,
      gain: Number(gain),
      date,
      notes,
    };

    setInstallations([newItem, ...installations]);

    setNumeroClient("");
    setInstallation("");
    setGain("");
    setDate("");
    setNotes("");
  }

  const total = installations.reduce((a, b) => a + b.gain, 0);

  return (
    <main style={{ padding: 20 }}>
      <h1>Installations HORSDEP</h1>

      <input placeholder="Numéro client" value={numeroClient} onChange={(e) => setNumeroClient(e.target.value)} />
      <input placeholder="Installation (ex: START + BAC)" value={installation} onChange={(e) => setInstallation(e.target.value)} />
      <input placeholder="Gain €" value={gain} onChange={(e) => setGain(e.target.value)} />
      <input placeholder="Date (YYYY-MM-DD)" value={date} onChange={(e) => setDate(e.target.value)} />
      <input placeholder="Notes (optionnel)" value={notes} onChange={(e) => setNotes(e.target.value)} />

      <button onClick={ajouter}>Ajouter</button>

      <h2>Total HORSDEP : {total} €</h2>

      {installations.map((i) => (
        <div key={i.id}>
          {i.numeroClient} - {i.installation} - {i.gain}€
        </div>
      ))}
    </main>
  );
}
