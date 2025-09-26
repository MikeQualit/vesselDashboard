import React from 'react';

const DateRangePicker = ({ dateRange, onDateChange }) => {
  // Handle change of the "start" date input
  const handleStartDateChange = (e) => {
    onDateChange({ ...dateRange, start: e.target.value });
  };

  // Handle change of the "end" date input
  const handleEndDateChange = (e) => {
    onDateChange({ ...dateRange, end: e.target.value });
  };

  return (
    <div className="date-range-picker">
      <h3>Sample Data</h3>
      <div className="date-inputs">
        {/* Input for selecting the start date */}
        <label>
          From:
          <input 
            type="date" 
            value={dateRange.start} 
            onChange={handleStartDateChange} 
          />
        </label>

        {/* Input for selecting the end date */}
        <label>
          To:
          <input 
            type="date" 
            value={dateRange.end} 
            onChange={handleEndDateChange} 
          />
        </label>
      </div>
    </div>
  );
};

export default DateRangePicker;
