export default function Page() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>X3BZ Dashboard</h1>
      <p>Application de suivi commercial</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>Ventes</h3>
          <p>Suivi des ventes réalisées</p>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>Commissions</h3>
          <p>Calcul des commissions</p>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>DCO</h3>
          <p>Contrôle des données commerciales</p>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>Prospection</h3>
          <p>Gestion des prospects</p>
        </div>

      </div>
    </main>
  );
}