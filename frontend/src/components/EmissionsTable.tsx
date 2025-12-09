import { useMemo, useState } from "react";
import type { Emission } from "../App";

interface Props {
  emissions: Emission[];
}

type SortKey = keyof Emission;

function EmissionsTable({ emissions }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("country");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [sectorFilter, setSectorFilter] = useState("");

  const countries = useMemo(
    () => Array.from(new Set(emissions.map((e) => e.country))).sort(),
    [emissions]
  );

  const sectors = useMemo(
    () => Array.from(new Set(emissions.map((e) => e.sector))).sort(),
    [emissions]
  );

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const filteredData = emissions.filter((item) => {
    const matchesCountry =
      !countryFilter || item.country === countryFilter;

    const matchesSector =
      !sectorFilter || item.sector === sectorFilter;

    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      !lowerSearch ||
      item.company.toLowerCase().includes(lowerSearch) ||
      item.country.toLowerCase().includes(lowerSearch) ||
      item.sector.toLowerCase().includes(lowerSearch);

    return matchesCountry && matchesSector && matchesSearch;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    const first = a[sortKey];
    const second = b[sortKey];

    if (typeof first === "number" && typeof second === "number") {
      return sortDirection === "asc" ? first - second : second - first;
    }

    return sortDirection === "asc"
      ? String(first).localeCompare(String(second))
      : String(second).localeCompare(String(first));
  });

  const arrow = (key: SortKey) => {
    if (sortKey !== key) return "";
    return sortDirection === "asc" ? " ▲" : " ▼";
  };

  return (
    <>
      <div className="filters">
        <label>
          Suche
          <input
            type="text"
            value={searchTerm}
            placeholder="z. B. Unternehmensname"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>

        <label>
          Land
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
          >
            <option value="">Alle Länder</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>

        <label>
          Sektor
          <select
            value={sectorFilter}
            onChange={(e) => setSectorFilter(e.target.value)}
          >
            <option value="">Alle Sektoren</option>
            {sectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </label>
      </div>

      <table className="emissions-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("country")}>Land{arrow("country")}</th>
            <th onClick={() => handleSort("company")}>Unternehmen{arrow("company")}</th>
            <th onClick={() => handleSort("sector")}>Sektor{arrow("sector")}</th>
            <th onClick={() => handleSort("emissions")}>
              Emissionen (Mio. t){arrow("emissions")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              <td>{row.country}</td>
              <td>{row.company}</td>
              <td>{row.sector}</td>
              <td>{row.emissions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EmissionsTable;
