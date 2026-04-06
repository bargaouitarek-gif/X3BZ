"use client";

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

type Vente = {
  id: number;
  numeroClient: string;
  nomClient: string;
  type: "Particulier" | "Professionnel";
  ville: string;
  engagement: "0 mois" | "12 mois" | "24 mois" | "36 mois";
  prixKit: number;
  abonnement: number;
  statut: "Signé" | "Posé" | "Payé";
  commission: number;
};

export default function Page({
  params,
}: {
  params: { numero: string };
}) {
  const [client, setClient] = useState<Client | null>(null);
  const [ventesClient, setVentesClient] = useState<Vente[]>([]);

  useEffect(() => {
    const dataClients = localStorage.getItem("clientsX3BZ");
    if (dataClients) {
      const clients: Client[] = JSON.parse(dataClients);
      const found = clients.find((c) => c.numero === params.numero) || null;
      setClient(found);
    }

    const dataVentes = localStorage.getItem("ventesX3BZ");
    if (dataVentes) {
      const ventes: Vente[] = JSON.parse(dataVentes);
      const filtrees = ventes.filter((v) => v.numeroClient === params.numero);
      setVentesClient(filtrees);
    }
  }, [params.numero]);

  if (!client) {
    return (
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1>Fiche client</h1>
        <p>Client introuvable.</p>
      </div>
    );
  }

  const derniereVente = ventesClient[0] || null;
  const commissionVente = derniereVente ? derniereVente.commission : 0;
  const commissionInstallation = 0;
  const commissionTotale = commissionVente + commissionInstallation;

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1>Fiche client</h1>

      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Informations client</h2>
        <p><strong>Numéro client :</strong> {client.numero}</p>
        <p><strong>Nom :</strong> {client.nom}</p>
        <p><strong>Téléphone :</strong> {client.telephone || "-"}</p>
        <p><strong>Mail :</strong> {client.mail || "-"}</p>
        <p><strong>Adresse :</strong> {client.adresse || "-"}</p>
        <p><strong>Code postal :</strong> {client.codePostal || "-"}</p>
        <p><strong>Ville :</strong> {client.ville || "-"}</p>
        <p><strong>Type client :</strong> {client.type}</p>
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Vente</h2>

        {derniereVente ? (
          <>
            <p><strong>Kit vendu :</strong> START</p>
            <p><strong>Engagement :</strong> {derniereVente.engagement}</p>
            <p><strong>Abonnement :</strong> {derniereVente.abonnement} €</p>
            <p><strong>Prix kit :</strong> {derniereVente.prixKit} €</p>
            <p><strong>Statut :</strong> {derniereVente.statut}</p>
            <p><strong>Codes promo utilisés :</strong> à compléter</p>
          </>
        ) : (
          <p>Aucune vente liée à ce client pour le moment.</p>
        )}
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Commission pure</h2>
        <p><strong>Commission vente :</strong> {commissionVente} €</p>
        <p><strong>Commission installation :</strong> {commissionInstallation} €</p>
        <p><strong>Commission totale liée à ce client :</strong> {commissionTotale} €</p>
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Historique commercial</h2>
        <p>Aucune action enregistrée pour le moment.</p>
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Parrainages</h2>
        <p>Aucun parrainage enregistré pour le moment.</p>
      </div>
    </div>
  );
}
