import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../styles/fonts.css';

const Chart = ({ data, visibleSeries, threshold = 14 }) => {

  const series = [];

  // Add "Value A" series only if it's visible
  if (visibleSeries.valueA) {
    series.push({
      name: 'Value A',
      data: data.valueA,
      color: '#7FFF00', // default green
      // Zones allow conditional coloring of the line and points
      zones: [
        {
          value: threshold,   // up to threshold → green
          color: '#7FFF00'
        },
        {
          color: '#dc3545'    // above threshold → red
        }
      ],
      zoneAxis: 'y', // apply zones based on Y-axis values
      marker: {
        enabled: true,       // show points
        symbol: 'circle',    // circular markers
        fillColor: null      // inherit zone color
      }
    });
  }

  // Add "Value B" series if visible
  if (visibleSeries.valueB) {
    series.push({
      name: 'Value B',
      data: data.valueB,
      color: '#FF8C00' // orange
    });
  }

  // Add "Value C" series if visible
  if (visibleSeries.valueC) {
    series.push({
      name: 'Value C',
      data: data.valueC,
      color: '#00BFFF' // blue
    });
  }

  // Highcharts configuration object
  const options = {
    chart: {
      type: 'line',
      height: 400
    },
    title: {
      text: 'NGC A',
      style: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: data.dates, // show dates on X axis
      title: { text: 'Date' },
      labels: { style: { fontFamily: 'Nunito Sans, sans-serif' } }
    },
    yAxis: {
      title: { text: 'Values' },
      min: 0,
      labels: { style: { fontFamily: 'Nunito Sans, sans-serif' } }
    },
    series: series,
    credits: { enabled: false }, // hide "Highcharts" watermark
    legend: {
      itemStyle: { fontFamily: 'Nunito Sans, sans-serif' }
    }
  };

  return (
    <div className="chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
