"use client";

import { useEffect, useMemo, useState } from "react";

type ClientType = "Particulier" | "Professionnel";
type Engagement = "0 mois" | "12 mois" | "24 mois" | "36 mois";
type Statut = "Signé" | "Posé" | "Payé";

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
  type: ClientType;
  ville: string;
  engagement: Engagement;
  prixKit: number;
  abonnement: number;
  statut: Statut;
  commission: number;
};

export default function Page() {
  const [clients, setClients] = useState<Client[]>([]);
  const [rechercheClient, setRechercheClient] = useState("");
  const [clientSelectionne, setClientSelectionne] = useState<Client | null>(null);

  const [type, setType] = useState<ClientType>("Particulier");
  const [ville, setVille] = useState("");
  const [engagement, setEngagement] = useState<Engagement>("12 mois");
  const [statut, setStatut] = useState<Statut>("Signé");
  const [ventes, setVentes] = useState<Vente[]>([]);

  useEffect(() => {
    const dataClients = localStorage.getItem("clientsX3BZ");
    if (dataClients) {
      setClients(JSON.parse(dataClients));
    }

    const dataVentes = localStorage.getItem("ventesX3BZ");
    if (dataVentes) {
      setVentes(JSON.parse(dataVentes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ventesX3BZ", JSON.stringify(ventes));
  }, [ventes]);

  const clientsFiltres = clients.filter((c) =>
    `${c.numero} ${c.nom} ${c.telephone} ${c.mail} ${c.ville}`
      .toLowerCase()
      .includes(rechercheClient.toLowerCase())
  );

  const engagementsDisponibles: Engagement[] =
    type === "Particulier"
      ? ["0 mois", "12 mois", "36 mois"]
      : ["0 mois", "24 mois", "36 mois"];

  useEffect(() => {
    if (!engagementsDisponibles.includes(engagement)) {
      setEngagement(engagementsDisponibles[0]);
    }
  }, [type, engagement, engagementsDisponibles]);

  const prixKit = useMemo(() => {
    if (engagement === "0 mois") return 799;
    if (engagement === "12 mois" || engagement === "24 mois") return 599;
    return 399;
  }, [engagement]);

  const abonnement = useMemo(() => {
    return type === "Particulier" ? 51.9 : 65;
  }, [type]);

  function calculerCommission(statut: Statut) {
    if (statut === "Signé") return 110;
    if (statut === "Posé") return 130;
    return 150;
  }

  function choisirClient(client: Client) {
    setClientSelectionne(client);
    setRechercheClient(`${client.numero} - ${client.nom}`);
    setVille(client.ville || "");
    setType(client.type === "Professionnel" ? "Professionnel" : "Particulier");
  }

  function ajouterVente() {
    if (!clientSelectionne) return;

    const nouvelleVente: Vente = {
      id: Date.now(),
      numeroClient: clientSelectionne.numero,
      nomClient: clientSelectionne.nom,
      type,
      ville: ville.trim(),
      engagement,
      prixKit,
      abonnement,
      statut,
      commission: calculerCommission(statut),
    };

    setVentes([nouvelleVente, ...ventes]);

    setRechercheClient("");
    setClientSelectionne(null);
    setVille("");
    setType("Particulier");
    setEngagement("12 mois");
    setStatut("Signé");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            background: "#111827",
            color: "white",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "32px" }}>Ventes</h1>
          <p style={{ marginTop: "10px", color: "#d1d5db" }}>
            Saisie d’une vente liée à un client existant
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
              Prix kit START
            </p>
            <h2 style={{ margin: "10px 0 0 0", fontSize: "28px" }}>
              {prixKit} €
            </h2>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
              Abonnement
            </p>
            <h2 style={{ margin: "10px 0 0 0", fontSize: "28px" }}>
              {abonnement} €
            </h2>
          </div>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Ajouter une vente</h2>

          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>
              Rechercher un client
            </label>
            <input
              value={rechercheClient}
              onChange={(e) => {
                setRechercheClient(e.target.value);
                setClientSelectionne(null);
              }}
              placeholder="Numéro, nom, téléphone, mail, ville..."
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                marginBottom: "10px",
              }}
            />

            {rechercheClient && !clientSelectionne && (
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                {clientsFiltres.length === 0 ? (
                  <div style={{ padding: "12px", color: "#6b7280" }}>
                    Aucun client trouvé.
                  </div>
                ) : (
                  clientsFiltres.slice(0, 6).map((client) => (
                    <button
                      key={client.id}
                      onClick={() => choisirClient(client)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px",
                        border: "none",
                        borderBottom: "1px solid #e5e7eb",
                        background: "white",
                        cursor: "pointer",
                      }}
                    >
                      <strong>{client.numero}</strong> — {client.nom} ({client.ville})
                    </button>
                  ))
                )}
              </div>
            )}

            {clientSelectionne && (
              <div
                style={{
                  marginTop: "10px",
                  padding: "12px",
                  borderRadius: "10px",
                  background: "#ecfdf5",
                  color: "#065f46",
                }}
              >
                Client sélectionné : <strong>{clientSelectionne.numero}</strong> —{" "}
                {clientSelectionne.nom}
              </div>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            <div>
              <label style={{ display: "block", marginBottom: "6px" }}>
                Type de client
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as ClientType)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                }}
              >
                <option>Particulier</option>
                <option>Professionnel</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "6px" }}>
                Ville
              </label>
              <input
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                placeholder="Ville"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "6px" }}>
                Engagement
              </label>
              <select
                value={engagement}
                onChange={(e) => setEngagement(e.target.value as Engagement)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                }}
              >
                {engagementsDisponibles.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "6px" }}>
                Statut
              </label>
              <select
                value={statut}
                onChange={(e) => setStatut(e.target.value as Statut)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                }}
              >
                <option>Signé</option>
                <option>Posé</option>
                <option>Payé</option>
              </select>
            </div>
          </div>

          <button
            onClick={ajouterVente}
            style={{
              marginTop: "16px",
              background: "#111827",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "12px 18px",
              cursor: "pointer",
            }}
          >
            Ajouter la vente
          </button>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Ventes enregistrées</h2>

          {ventes.length === 0 ? (
            <p style={{ color: "#6b7280" }}>Aucune vente enregistrée.</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ textAlign: "left", color: "#6b7280" }}>
                    <th style={{ padding: "10px" }}>Numéro client</th>
                    <th style={{ padding: "10px" }}>Client</th>
                    <th style={{ padding: "10px" }}>Type</th>
                    <th style={{ padding: "10px" }}>Ville</th>
                    <th style={{ padding: "10px" }}>Engagement</th>
                    <th style={{ padding: "10px" }}>Kit</th>
                    <th style={{ padding: "10px" }}>Abonnement</th>
                    <th style={{ padding: "10px" }}>Commission</th>
                    <th style={{ padding: "10px" }}>Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {ventes.map((vente) => (
                    <tr key={vente.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                      <td style={{ padding: "10px" }}>{vente.numeroClient}</td>
                      <td style={{ padding: "10px" }}>{vente.nomClient}</td>
                      <td style={{ padding: "10px" }}>{vente.type}</td>
                      <td style={{ padding: "10px" }}>{vente.ville}</td>
                      <td style={{ padding: "10px" }}>{vente.engagement}</td>
                      <td style={{ padding: "10px" }}>{vente.prixKit} €</td>
                      <td style={{ padding: "10px" }}>{vente.abonnement} €</td>
                      <td style={{ padding: "10px" }}>{vente.commission} €</td>
                      <td style={{ padding: "10px" }}>{vente.statut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
                                           }
