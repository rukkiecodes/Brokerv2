<template>
    <v-card-title class="pl-0 d-flex align-center">
      <v-avatar size="34" class="mr-3">
        <v-img src="@/assets/images/XTVCETH--big.svg" />
      </v-avatar>
      Ethereum / U.S. Dollar
    </v-card-title>
    <v-card-title class="pl-0 text-h5 pb-0">
      16553.00 <small style="font-size: 0.6rem">USD</small></v-card-title
    >
    <v-card-title class="pl-0 text-body-1 pt-0 text-red-lighten-1">
      −70.00 −0.42%
      <small style="font-size: 0.6rem">Today</small></v-card-title
    >
    <Line :data="data" :options="options" />
  </template>
  
  <script>
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "vue-chartjs";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export default {
    components: { Line },
  
    data: () => ({
      data: {
        labels: ["", "", "", "", "", "", ""],
        datasets: [
          {
            label: "investments",
            backgroundColor: "#3F51B5",
            fill: false,
            type: "line",
            id: "y-axis-1",
            data: [0, 50, 20, 60, 20, 100, 150, 50, 60, 55, 100, 120],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    }),
  };
  </script>