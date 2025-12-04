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
    <div className="app layout-ltr">
      <Header />

      <main className="main-layout">
        <aside className="local-menu">
          <LocalMenu />
        </aside>

        <section className="content">
          <h2>CO₂-Emissionen Übersicht</h2>
          <EmissionsTable emissions={emissions} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
