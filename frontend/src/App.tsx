import { useEffect, useState } from "react";

interface Emission {
  country: string;
  company: string;
  sector: string;
  emissions: number;
}

function App() {
  const [emissions, setEmissions] = useState<Emission[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/emissions")
      .then((res) => res.json())
      .then((data: Emission[]) => {
        console.log("Loaded emissions:", data);
        setEmissions(data);
      })
      .catch((err) => console.error("Error fetching emissions:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>CO₂ Emissions Dashboard</h1>

      <table border={1} cellPadding={8} style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Land</th>
            <th>Unternehmen</th>
            <th>Sektor</th>
            <th>Emissionen</th>
          </tr>
        </thead>
        <tbody>
          {emissions.map((row, index) => (
            <tr key={index}>
              <td>{row.country}</td>
              <td>{row.company}</td>
              <td>{row.sector}</td>
              <td>{row.emissions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
