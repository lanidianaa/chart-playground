import React, { useEffect, useRef } from "react";
import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
	Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
	gradient,
	Filler,
	ChartDataLabels
);

export const options = {
	animation: {
		duration: 2000,
		easing: "easeOutCubic",
	},
	responsive: true,
	plugins: {
		legend: {
			display: true,
			position: "bottom",
			labels: {
				color: "#1E1C0F",
				font: {
					size: 11,
					family: "Quicksand",
					weight: "450",
				},
				padding: 20,
				pointStyle: "rectRounded",
				usePointStyle: true,
			},
		},
		title: {
			display: false,
			text: "Chart.js Bar Chart",
		},
		tooltip: {
			enabled: false,
		},
	},
	scales: {
		x: {
			display: true,
			ticks: {
				display: true,
				color: "#78776F",
				font: {
					size: 10,
					family: "Quicksand",
					weight: "600",
				},
				padding: 10,
			},
			grid: {
				drawTicks: false,
				color: "#E8EBEE",
			},
		},
		y: {
			position: "right",
			stacked: true,
			ticks: {
				display: true,
				color: "#78776F",
				font: {
					size: 10,
					family: "Quicksand",
					weight: "600",
				},
				padding: 10,
				callback: function (value, index, ticks) {
					return value + "J";
				},
			},
			grid: {
				color: "#E8EBEE",
				drawTicks: false,
			},
		},
	},
};

// const CustomLegend = ({ label, color }) => {
// 	return (
// 		<div className="flex items-center justify-center w-full">
// 			<div className="bg-red-200 flex items-center">
// 				<span className="w-3 h-3 rounded-md bg-red-700"></span>
// 				<span>{label}</span>
// 			</div>
// 		</div>
// 	);
// };

const StepperAreaChart = (props) => {
	return (
		<Chart
			{...props}
			options={options}
		/>
	);
};

export default StepperAreaChart;
