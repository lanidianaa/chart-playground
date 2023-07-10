import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
	gradient
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
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
				align: "start",
				autoSkip: true,
			},
			grid: {
				drawTicks: false,
				color: "#E8EBEE",
			},
		},
		y: {
			position: "right",
			beginAtZero: true,
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
					return value ? value + "J" : value;
				},
			},
			grid: {
				color: "#E8EBEE",
				drawTicks: false,
			},
		},
	},
};

const MultiAreaChart = (props) => {
	return (
		<Line
			options={options}
			{...props}
		/>
	);
};

export default MultiAreaChart;
