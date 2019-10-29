// Example Javascript object with embedded arrays, properties, and values
var options = {
	version: 1.0,
	data: {
		updated: "7/30/2019",
		items: [
			// Pie Chart for Survival Rate
			{
				chart: {
					type: "pie"
				},
				labels: ["Survived", "Died"],
				series: [342, 549],
				title: {
					text: "Survival Rate",
					align: "center",
					style: {
						fontSize: "18px",
						color: "#595959",
						fontFamily: "Poppins"
					}
				},
				colors: ["#8ABFB5", "#A66F3F"],
				legend: {
					position: "bottom",
					fontSize: "14px",
					fontFamily: "Poppins",
					labels: {
						useSeriesColors: true
					}
				},
				dataLabels: {
					textAnchor: "middle",
					style: {
						fontSize: "16px",
						fontFamily: "Poppins",
						colors: ["#8ABFB5", "#A66F3F"]
					},
					dropShadow: {
						enabled: false
					}
				},
				plotOptions: {
					pie: {
						dataLabels: {
							offset: 40
						}
					}
				}
			}, // End of Pie Chart
			// Start of Bar Chart
			{
				chart: {
					height: 350,
					type: "bar"
				},
				plotOptions: {
					bar: {
						columnWidth: "50%",
						endingShape: "rounded"
					}
				},
				dataLabels: {
					enabled: false
				},
				tooltip: {
					style: {
						fontSize: "14px",
						fontFamily: "Poppins"
						// Color is assigned via the CSS using .apexcharts-tooltip
					}
				},
				series: [
					{
						name: "Survived",
						data: [231, 109]
					},
					{
						name: "Died",
						data: [81, 468]
					}
				],
				xaxis: {
					categories: ["Female", "Male"],
					labels: {
						style: {
							fontSize: "14px",
							color: "#595959",
							fontFamily: "Poppins"
						}
					}
				},
				yaxis: {
					labels: {
						style: {
							fontSize: "14px",
							color: "#595959",
							fontFamily: "Poppins"
						}
					}
				},
				title: {
					text: "Gender",
					align: "center",
					style: {
						fontSize: "18px",
						color: "#595959",
						fontFamily: "Poppins"
					}
				},
				colors: ["#8ABFB5", "#A66F3F"],
				legend: {
					position: "bottom",
					fontSize: "14px",
					fontFamily: "Poppins",
					labels: {
						useSeriesColors: true
					}
				},
				fill: {
					opacity: 1
				}
			}, //End of Bar Chart
			// Start of Line Chart
			{
				chart: {
					height: 350,
					type: "line"
				},
				colors: ["#8ABFB5", "#A66F3F"],
				dataLabels: {
					enabled: false
				},
				tooltip: {
					style: {
						fontSize: "14px",
						fontFamily: "Poppins"
						// Color is assigned via the CSS using .apexcharts-tooltip
					}
				},
				series: [
					{
						name: "Survived",
						data: [55, 180, 75, 29, 1]
					},
					{
						name: "Died",
						data: [45, 343, 112, 39, 10]
					}
				],
				title: {
					text: "Age",
					align: "center",
					style: {
						fontSize: "18px",
						color: "#595959",
						fontFamily: "Poppins"
					}
				},
				grid: {
					borderColor: "#e7e7e7",
					row: {
						colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
						opacity: 0.5
					}
				},
				markers: {
					size: 6
				},
				xaxis: {
					categories: ["0-16.3", "16.3-32.3", "32.3-48.2", "48.2-64.1", "64.1-..."],
					title: {
						text: "Bins",
						style: {
							fontSize: "14px",
							color: "#595959",
							fontFamily: "Poppins"
						}
					},
					labels: {
						style: {
							fontSize: "14px",
							color: "#595959",
							fontFamily: "Poppins"
						}
					}
				},
				yaxis: {
					labels: {
						style: {
							fontSize: "14px",
							color: "#595959",
							fontFamily: "Poppins"
						}
					}
				},
				legend: {
					position: "top",
					horizontalAlign: "right",
					floating: true,
					offsetY: -25,
					offsetX: -5,
					fontSize: "14px",
					fontFamily: "Poppins",
					labels: {
						useSeriesColors: true
					}
				}
			}, //End of Line Chart
			// Start of Radar Chart
			{
				chart: {
					height: 400,
					type: "radar"
				},
				series: [
					{
						name: "Error",
						data: [38, 18.29, 40, 40]
					}
				],
				title: {
					text: "Model Accuracy",
					align: "center",
					style: {
						fontSize: "18px",
						color: "#595959",
						fontFamily: "Poppins"
					}
				},
				fill: {
					opacity: 0.4,
					colors: ["#5e8c7f"]
				},
				stroke: {
					show: true,
					width: 4,
					colors: ["#5e8c7f"],
					dashArray: 0
				},
				markers: {
					size: 5,
					colors: ["#5e8c7f"],
					hover: {
						size: 10
					}
				},
				dataLabels: {
					style: {
						fontSize: "14px",
						fontFamily: "Poppins"
					}
				},
				plotOptions: {
					radar: {
						polygons: {
							strokeColor: "#e8e8e8",
							fill: {
								colors: ["#f8f8f8", "#fff"]
							}
						}
					}
				},
				yaxis: {
					labels: {
						style: {
							fontFamily: "Poppins"
						}
					}
				},
				tooltip: {
					style: {
						fontSize: "14px",
						fontFamily: "Poppins"
						// Color is assigned via the CSS using .apexcharts-tooltip
					},
					marker: {
						show: false
					}
				},
				labels: ["Majority Class", "Decision Tree", "Neural Network", "Naive Bayes"]
			}, // End of Radar Chart
			// Start of Radial Bars Chart
			{
				chart: {
					height: 350,
					type: "radialBar"
				},
				title: {
					text: "",
					align: "center",
					style: {
						fontSize: "18px",
						color: "#595959",
						fontFamily: "Poppins"
					}
				},
				colors: ["#8ABFB5", "#A66F3F"],
				plotOptions: {
					radialBar: {
						dataLabels: {
							name: {
								fontSize: "22px",
								fontFamily: "Poppins"
							},
							value: {
								fontSize: "16px",
								fontFamily: "Poppins"
							},
							total: {
								show: false,
								label: "Prediction",
								color: "#8c442a",
								formatter: function(val) {
									// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
									//return val;
								}
							}
						}
					}
				},
				series: [50, 50],
				labels: ["Survived", "Died"],
				legend: {
					show: true,
					floating: true,
					fontSize: "16px",
					position: "bottom",
					labels: {
						useSeriesColors: true
					},
					markers: {
						size: 0
					},
					formatter: function(seriesName, opts) {
						return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%";
					},
					itemMargin: {
						horizontal: 1
					}
				}
			}, // End of Radial Bars Chart
            // Start of Bar Chart
			{
				chart: {
					height: 350,
					type: "bar"
				},
				plotOptions: {
					bar: {
						columnWidth: "50%",
						endingShape: "rounded"
					}
				},
				dataLabels: {
					enabled: false
				},
				tooltip: {
					style: {
						fontSize: "14px",
						fontFamily: "Poppins"
						// Color is assigned via the CSS using .apexcharts-tooltip
					}
				},
				series: [
					{
						name: "Survived",
						data: [201, 118, 182]
					},
					{
						name: "Died",
						data: [123, 158, 527]
					}
				],
				xaxis: {
					categories: ["1", "2", "3"],
					labels: {
						style: {
							fontSize: "14px",
							color: "#595959",
							fontFamily: "Poppins"
						}
					}
				},
				yaxis: {
					labels: {
						style: {
							fontSize: "14px",
							color: "#595959",
							fontFamily: "Poppins"
						}
					}
				},
				title: {
					text: "Pclass",
					align: "center",
					style: {
						fontSize: "18px",
						color: "#595959",
						fontFamily: "Poppins"
					}
				},
				colors: ["#8ABFB5", "#A66F3F"],
				legend: {
					position: "bottom",
					fontSize: "14px",
					fontFamily: "Poppins",
					labels: {
						useSeriesColors: true
					}
				},
				fill: {
					opacity: 1
				}
			} //End of Bar Chart
		]
	}
};

// Assign a variable called chart an object constructed via the ApexCharts function, which defines an HTML element and the relevant chart data
var chart = new ApexCharts(document.querySelector("#chart0"), options.data.items[0]);
var chart1 = new ApexCharts(document.querySelector("#chart1"), options.data.items[1]);
var chart2 = new ApexCharts(document.querySelector("#chart2"), options.data.items[2]);
var chart3 = new ApexCharts(document.querySelector("#chart3"), options.data.items[3]);
var chart4 = new ApexCharts(document.querySelector("#chart4"), options.data.items[4]);
var chart5 = new ApexCharts(document.querySelector("#chart5"), options.data.items[5]);


// Render the chart using the element and data
chart.render();
chart1.render();
chart2.render();
chart3.render();
chart4.render();
chart5.render();

