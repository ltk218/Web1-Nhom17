// Pure JavaScript replacement for Chart.js with animations

document.addEventListener('DOMContentLoaded', function() {
  // Create a simple donut chart with CSS
  const chartContainer = document.getElementById('myChart');
  if (chartContainer) {
    // Remove the canvas element
    chartContainer.innerHTML = '';
    
    // Create the donut chart container
    const donutChartContainer = document.createElement('div');
    donutChartContainer.className = 'donut-chart-container';
    
    // Create the donut chart
    const donutChart = document.createElement('div');
    donutChart.className = 'donut-chart';
    
    // Create the donut hole
    const donutHole = document.createElement('div');
    donutHole.className = 'donut-hole';
    donutHole.innerHTML = '<div style="text-align: center; font-weight: bold;">Thống kê</div>';
    
    // Append elements
    donutChart.appendChild(donutHole);
    donutChartContainer.appendChild(donutChart);
    chartContainer.appendChild(donutChartContainer);
    
    // Chart data - only showing categories with significant values
    const chartData = [
      { label: 'Đơn hàng', value: 33, color: '#ff7675' },
      { label: 'Sản phẩm', value: 28, color: '#ffa94d' },
      { label: 'Khách hàng', value: 22, color: '#55efc4' },
      { label: 'Danh mục', value: 17, color: '#a29bfe' }
    ];
    
    // Create horizontal legend below the chart
    const legendContainer = document.createElement('div');
    legendContainer.style.display = 'flex';
    legendContainer.style.justifyContent = 'center';
    legendContainer.style.flexWrap = 'wrap';
    legendContainer.style.gap = '10px';
    legendContainer.style.marginTop = '10px';
    
    chartData.forEach((item, index) => {
      const legendItem = document.createElement('div');
      legendItem.style.display = 'flex';
      legendItem.style.alignItems = 'center';
      legendItem.style.marginRight = '10px';
      legendItem.style.opacity = '1';
      
      const colorBox = document.createElement('div');
      colorBox.style.width = '10px';
      colorBox.style.height = '10px';
      colorBox.style.borderRadius = '50%';
      colorBox.style.backgroundColor = item.color;
      colorBox.style.marginRight = '5px';
      
      const label = document.createElement('span');
      label.textContent = `${item.label}: ${item.value}%`;
      label.style.fontSize = '12px';
      
      legendItem.appendChild(colorBox);
      legendItem.appendChild(label);
      legendContainer.appendChild(legendItem);
    });
    
    chartContainer.appendChild(legendContainer);
  }
});
