import React from 'react';

const Sidebar = ({ visibleSeries, onToggleSeries }) => {
  // Toggle visibility for each chart series
  const handleToggle = (series) => {
    onToggleSeries({
      ...visibleSeries,
      [series]: !visibleSeries[series]
    });
  };

  return (
    <div className="sidebar-content extra-bold">
      <h3>Showing</h3>
      <div className="checkbox-group">
        {/* Checkboxes for Value A, B, C */}
        <label>
          <input
            type="checkbox"
            checked={visibleSeries.valueA}
            onChange={() => handleToggle('valueA')}
          />
          Value A
        </label>
        <label>
          <input
            type="checkbox"
            checked={visibleSeries.valueB}
            onChange={() => handleToggle('valueB')}
          />
          Value B
        </label>
        <label>
          <input
            type="checkbox"
            checked={visibleSeries.valueC}
            onChange={() => handleToggle('valueC')}
          />
          Value C
        </label>
      </div>
      
      {/* Legend shows additional info */}
      <div className="legend">
        <h4>Status</h4>
        <div className="legend-item">At Sea w/ Slow Steaming</div>
        <div className="legend-item">At Port</div>
      </div>
    </div>
  );
};

export default Sidebar;
