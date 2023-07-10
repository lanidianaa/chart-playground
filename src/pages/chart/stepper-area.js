import StepperAreaChart from "@/components/stepperArea";

const labels = ["TK", "SD", "SMP", "SMA", "S1", "S2"];
const dataFromServer = [102, 240, 200, 452, 580, 720];
const max = dataFromServer.reduce((a, b) => Math.max(a, b));

const data = {
	labels,
	datasets: [
		{
			type: "bar",
			label: "Current",
			backgroundColor: "rgb(75, 192, 192)",
			data: [102, 200],
			borderColor: "white",
			barPercentage: 1,
			categoryPercentage: 1,
			backgroundColor: "rgba(123, 204, 41, 0.5)",
			datalabels: {
				display: false,
			},
		},
		{
			type: "line",
			label: "Target",
			borderWidth: 2,
			data: dataFromServer,
			stepped: "middle",
			borderDash: [7],
			borderColor: "#0FAD61",
			pointRadius: 0,
			fill: true,
			backgroundColor: "rgba(53, 162, 235, 0.5)",
			gradient: {
				backgroundColor: {
					axis: "y",
					colors: {
						0: "#8DEABD00",
						[max]: "#42B549",
					},
				},
			},
			datalabels: {
				align: "top",
				color: "#0A7A44",
				font: {
					size: 10,
					// family: "Quicksand",
					weight: "600",
				},
				formatter: function (value, context) {
					return value + "J";
				},
			},
		},
	],
};

const StepperArea = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="border border-rose-200 rounded-lg p-10">
				<StepperAreaChart
					type="bar"
					data={data}
					width={320}
					height={320}
				/>
			</div>
		</div>
	);
};

export default StepperArea;
