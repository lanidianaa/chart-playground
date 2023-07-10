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

const GoalLineChart = (props) => {
	const options = {
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
					drawTicks: true,
					color: "#E8EBEE",
				},
			},
			y: {
				position: "right",
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
						return value;
					},
				},
				grid: {
					color: "#E8EBEE",
					drawTicks: false,
				},
			},
		},
	};

	return (
		<Line
			options={options}
			{...props}
		/>
	);
};

export default GoalLineChart;
