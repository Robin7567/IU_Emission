import type { Emission } from "../App";

interface Props {
  emissions: Emission[];
}

function EmissionsTable({ emissions }: Props) {
  return (
    <table className="emissions-table">
      <thead>
        <tr>
          <th>Land</th>
          <th>Unternehmen</th>
          <th>Sektor</th>
          <th>Emissionen (Mio. t)</th>
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
  );
}

export default EmissionsTable;
