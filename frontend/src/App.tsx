import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocalMenu from "./components/LocalMenu";
import EmissionsTable from "./components/EmissionsTable";

export interface Emission {
  country: string;
  company: string;
  sector: string;
  emissions: number;
}

function App() {
  const [emissions, setEmissions] = useState<Emission[]>([]);
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/emissions")
      .then((res) => res.json())
      .then((data) => setEmissions(data))
      .catch((err) => console.error("Error fetching emissions:", err));
  }, []);

  return (
    <div className={`app layout-${direction}`}>
      <Header />

      <main className="main-layout">
        <aside className="local-menu">
          <LocalMenu />
        </aside>

        <section className="content">
          <div className="direction-toggle">
            <label>
              Schriftkultur
              <select
                value={direction}
                onChange={(e) =>
                  setDirection(e.target.value === "rtl" ? "rtl" : "ltr")
                }
              >
                <option value="ltr">Links-nach-Rechts</option>
                <option value="rtl">Rechts-nach-Links</option>
              </select>
            </label>
          </div>

          <h2>CO₂-Emissionen Übersicht</h2>
          <p>
            Diese Seite zeigt fiktive CO₂-Emissionsdaten von Ländern und
            Unternehmen. Die Daten können gefiltert und sortiert werden.
          </p>

          <div className="table-wrapper">
            <EmissionsTable emissions={emissions} />
          </div>

          <section id="legal" className="legal-section">
            <h3>Rechtliche Hinweise</h3>
            <p>
              Alle dargestellten Daten sind fiktiv und dienen ausschließlich
              Demonstrations- und Lernzwecken.
            </p>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
