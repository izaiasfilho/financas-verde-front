<template>
  <div>
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  mounted() {
    new Chart(document.getElementById('chart'), {
      type: 'bar',
      data: {
        labels: ['Receitas', 'Despesas'],
        datasets: [{
          label: 'Finanças do Mês',
          data: [3000, 2500], // Mock de valores
          backgroundColor: ['#4CAF50', '#FF5722'],
        }],
      },
    });
  },
};
</script>
