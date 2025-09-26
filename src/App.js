import React, { useState } from 'react';
import './App.css';
import './styles/fonts.css';

import DateRangePicker from './components/DateRangePicker';
import Chart from './components/Chart';
import DataTable from './components/DataTable';
import Sidebar from './components/Sidebar';

// Example dataset (in a real project this could come from an API)
const sampleData = {
  dates: [
    '2019-06-19', '2019-06-20', '2019-06-21', '2019-06-22',
    '2019-06-23', '2019-06-24', '2019-06-25', '2019-06-26',
    '2019-06-27', '2019-06-28', '2019-06-29', '2019-06-30'
  ],
  valueA: [10, 10, 10, 10, 10, 11, 12, 15, 15, 15, 15, 15],
  valueB: [8, 8, 8, 8, 8, 9, 10, 12, 10],
  valueC: [2, 3, 3.5, 4, 6, 4, 4.5, 5, 5, 4, 4.5, 5]
};

function App() {
  // State for selected date range
  const [dateRange, setDateRange] = useState({
    start: '2019-06-19',
    end: '2019-06-30'
  });

  // State for toggling chart series visibility
  const [visibleSeries, setVisibleSeries] = useState({
    valueA: true,
    valueB: true, 
    valueC: true
  });

  // Filter data based on selected date range
  const filterDataByDateRange = (data, dateRange) => {
    const startIndex = data.dates.indexOf(dateRange.start);
    const endIndex = data.dates.indexOf(dateRange.end);

    if (startIndex === -1 || endIndex === -1) {
      return data;
    }

    return {
      dates: data.dates.slice(startIndex, endIndex + 1),
      valueA: data.valueA.slice(startIndex, endIndex + 1),
      valueB: data.valueB.slice(startIndex, endIndex + 1),
      valueC: data.valueC.slice(startIndex, endIndex + 1)
    };
  };

  const filteredData = filterDataByDateRange(sampleData, dateRange);

  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar 
          visibleSeries={visibleSeries}
          onToggleSeries={setVisibleSeries}
        />
      </div>
      
      <div className="main-content">
        <DateRangePicker 
          dateRange={dateRange}
          onDateChange={setDateRange}
        />
        
        <Chart 
          data={filteredData}
          visibleSeries={visibleSeries}
        />
        
        <DataTable data={filteredData} />
      </div>
    </div>
  );
}

export default App;
