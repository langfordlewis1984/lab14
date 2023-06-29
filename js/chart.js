"use strict";

let canvasElem = document.getElementById("chart");

Chart.defaults.font.size = "8px";
Chart.defaults.color = "#0c5b2d";

function renderChart() {
  // * - Instantiate a new AppState

  let appState = new AppState();

  // * - Use a method on that AppState to load vote data from localStorage.

  appState.loadItems();

  // * - Create a data object for chart.js using your AppState's allProducts array.

  // Create empty arrays for names, views and clicks

  let productNames = [];
  let productViews = [];
  let productClicks = [];

  // fill labels and data arrays

  for (let i = 0; i < appState.allProducts.length; i++) {
    productNames.push(appState.allProducts[i].name);
    productViews.push(appState.allProducts[i].timesClicked);
    productClicks.push(appState.allProducts[i].timesShown);
  }

  // set data values

  const data = {
    labels: productNames,
    datasets: [
      {
        label: "Clicks",
        data: productClicks,
        backgroundColor: ["#fec601"],
        borderColor: ["#0c5b2d"],
        borderWidth: 1,
      },
      {
        label: "Views",
        data: productViews,
        backgroundColor: ["#0c5b2d"],
        borderColor: ["#fec601"],
        borderWidth: 1,
      },
    ],
  };

  // set chart configuration

  const config = {
    type: "bar",
    data: data,
  };

  // call chart

  const newChart = new Chart(canvasElem, config);
}

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

renderChart();
