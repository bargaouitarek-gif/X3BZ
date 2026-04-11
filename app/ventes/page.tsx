"use client";

import { useEffect, useMemo, useState } from "react";

type ClientType = "Particulier" | "Professionnel";
type Engagement = "0 mois" | "12 mois" | "24 mois" | "36 mois";
type Statut = "Signé" | "Posé" | "Payé";

type Vente = {
  id: number;
  numeroClient: string;
  nomClient: string;
  adresseComplete: string;
  telephone: string;
  mail: string;
  type: ClientType;
  engagement: Engagement;
  statut: Statut;
  installationFaiteParMoi: "Oui" | "Non";
  prixKit: number;
  abonnement: number;
};

const STORAGE_KEY = "x3bz_ventes";

export default function Page() {
  const [numeroClient, setNumeroClient] = useState("");
  const [nomClient, setNomClient] = useState("");
  const [adresseComplete, setAdresseComplete] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mail, setMail] = useState("");
  const [type, setType] = useState<ClientType>("Particulier");
  const [engagement, setEngagement] = useState<Engagement>("12 mois");
  const [statut, setStatut] = useState<Statut>("Signé");
  const [installationFaiteParMoi, setInstallationFaiteParMoi] = useState<"Oui" | "Non">("Oui");
  const [ventes, setVentes] = useState<Vente[]>([]);

  const engagementsDisponibles: Engagement[] =
    type === "Particulier"
      ? ["0 mois", "12 mois", "36 mois"]
      : ["0 mois", "24 mois", "36 mois"];

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setVentes(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ventes));
  }, [ventes]);

  useEffect(() => {
    if (!engagementsDisponibles.includes(engagement)) {
      setEngagement(engagementsDisponibles[0]);
    }
  }, [type]);

  const prixKit = useMemo(() => {
    if (engagement === "0 mois") return 799;
    if (engagement === "12 mois" || engagement === "24 mois") return 599;
    return 399;
  }, [engagement]);

  const abonnement = useMemo(() => {
    return type === "Particulier" ? 51.9 : 65;
  }, [type]);

  function ajouterVente() {
    if (
      !numeroClient ||
      !nomClient ||
      !adresseComplete ||
      !telephone ||
      !mail
    ) return;

    const nouvelleVente: Vente = {
      id: Date.now(),
      numeroClient,
      nomClient,
      adresseComplete,
      telephone,
      mail,
      type,
      engagement,
      statut,
      installationFaiteParMoi,
      prixKit,
      abonnement,
    };

    setVentes([nouvelleVente, ...ventes]);

    setNumeroClient("");
    setNomClient("");
    setAdresseComplete("");
    setTelephone("");
    setMail("");
    setType("Particulier");
    setEngagement("12 mois");
    setStatut("Signé");
    setInstallationFaiteParMoi("Oui");
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Ventes</h1>

      <input placeholder="Numéro client" value={numeroClient} onChange={(e) => setNumeroClient(e.target.value)} />
      <input placeholder="Nom client" value={nomClient} onChange={(e) => setNomClient(e.target.value)} />
      <input placeholder="Adresse complète" value={adresseComplete} onChange={(e) => setAdresseComplete(e.target.value)} />
      <input placeholder="Téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      <input placeholder="Mail" value={mail} onChange={(e) => setMail(e.target.value)} />

      <select value={type} onChange={(e) => setType(e.target.value as ClientType)}>
        <option>Particulier</option>
        <option>Professionnel</option>
      </select>

      <select value={engagement} onChange={(e) => setEngagement(e.target.value as Engagement)}>
        {engagementsDisponibles.map((e) => <option key={e}>{e}</option>)}
      </select>

      <select value={statut} onChange={(e) => setStatut(e.target.value as Statut)}>
        <option>Signé</option>
        <option>Posé</option>
        <option>Payé</option>
      </select>

      <select value={installationFaiteParMoi} onChange={(e) => setInstallationFaiteParMoi(e.target.value as "Oui" | "Non")}>
        <option>Oui</option>
        <option>Non</option>
      </select>

      <button onClick={ajouterVente}>Ajouter</button>

      <h2>Liste des ventes</h2>

      {ventes.map((v) => (
        <div key={v.id}>
          {v.numeroClient} - {v.nomClient} - {v.prixKit}€ - {v.abonnement}€
        </div>
      ))}
    </main>
  );
        }
