import React from 'react';

const DataTable = ({ data }) => {
  const threshold = 14; // highlight values above this

  // Check if there is valid data
  if (!data || !data.dates || data.dates.length === 0) {
    return <div>No data available</div>;
  }

  // Prepare table rows for Value A, B, C
  const tableRows = [
    { label: 'Value A', values: data.valueA },
    { label: 'Value B', values: data.valueB },
    { label: 'Value C', values: data.valueC }
  ];

  return (
    <div className="data-table-container">
      <h3>Data Table</h3>
      <div className="table-wrapper">
        <table className="data-table rotated-table">
          <thead>
            <tr>
              {/* Row header for labels */}
              <th className="row-header">Value / Date</th>
              {/* One column for each date */}
              {data.dates.map((date, index) => (
                <th key={index} className="date-column">
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Loop through Value A, B, C rows */}
            {tableRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="row-label">{row.label}</td>
                {/* For each value, highlight if it exceeds the threshold */}
                {row.values.map((value, colIndex) => (
                  <td 
                    key={colIndex} 
                    className={value > threshold ? 'exceeded' : ''}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
