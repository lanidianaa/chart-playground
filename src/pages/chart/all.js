import GoalLineChart from "@/components/goalLine";
import MultiAreaChart from "@/components/multiArea.js";
import StepperAreaChart from "@/components/stepperArea";
import React from "react";

const AllCharts = () => {
	const multi = {
		labels: ["Jan 23", "Jul 23", "Jan 24", "Jul 24", "Jan 25", "Jul 25", "Jan 26"],
		datasets: [
			{
				fill: true,
				label: "KPR Rumah",
				data: [700, null, null, 700, null, null, 0],
				borderColor: "#0C59F8",
				pointRadius: 0,
				backgroundColor: "#0C59F8",
				borderCapStyle: "butt",
				spanGaps: true,
				gradient: {
					backgroundColor: {
						axis: "y",
						colors: {
							0: "#0C59F800",
							700: "#0C59F855",
						},
					},
				},
				datalabels: {
					display: false,
				},
			},
			{
				fill: true,
				label: "Cicilan Mobil",
				data: [500, null, 180, null, 100, 0],
				borderColor: "#850CFF",
				pointRadius: 0,
				backgroundColor: "#850CFF",
				borderCapStyle: "butt",
				spanGaps: true,
				gradient: {
					backgroundColor: {
						axis: "y",
						colors: {
							0: "#D9D9D900",
							500: "#850CFF",
						},
					},
				},
				datalabels: {
					display: false,
				},
			},
			{
				fill: true,
				label: "Kartu Kredit",
				data: [220, null, 80, null, 0],
				borderColor: "#0FAD61",
				pointRadius: 0,
				backgroundColor: "#0FAD61",
				borderCapStyle: "butt",
				spanGaps: true,
				gradient: {
					backgroundColor: {
						axis: "y",
						colors: {
							0: "#D9D9D900",
							220: "#0C9955",
						},
					},
				},
				datalabels: {
					display: false,
				},
			},
		],
	};

	const goalData = [10, null, null, null, 50];
	const goalMax = goalData.reduce((a, b) => Math.max(a, b));

	const goal = {
		labels: ["Jan", "Apr", "Jul", "Oct", "Nov"],
		datasets: [
			{
				fill: true,
				label: "Current",
				data: [10, 14, 36],
				// borderColor: "rgb(53, 162, 235)",
				pointRadius: 0,
				backgroundColor: "#F1652875",
				borderColor: "#F16528",
				borderWidth: 0,
				datalabels: {
					display: false,
				},
			},
			{
				fill: true,
				label: "Target",
				data: [10, null, null, null, 50],
				borderColor: "#0FAD61",
				pointRadius: 0,
				backgroundColor: "#0FAD61",
				borderCapStyle: "round",
				borderDash: [7],
				spanGaps: true,
				gradient: {
					backgroundColor: {
						axis: "y",
						colors: {
							0: "#D9D9D900",
							[goalMax]: "#0C9955",
						},
					},
				},
				datalabels: {
					display: false,
				},
			},
		],
	};

	const stepperData = [102, 240, 200, 452, 580, 720];
	const stepperMax = stepperData.reduce((a, b) => Math.max(a, b));

	const stepper = {
		labels: ["TK", "SD", "SMP", "SMA", "S1", "S2"],
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
				data: stepperData,
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
							[stepperMax]: "#42B549",
						},
					},
				},
				datalabels: {
					align: "top",
					color: "#0A7A44",
					font: {
						size: 10,
						family: "Quicksand",
						weight: "600",
					},
					formatter: function (value, context) {
						return value + "J";
					},
				},
			},
		],
	};

	return (
		<ul className="flex justify-center items-center gap-10 w-screen h-screen">
			<li className="">
				<GoalLineChart
					width={300}
					height={300}
					data={multi}
				/>
			</li>
			<li className="">
				<MultiAreaChart
					width={300}
					height={300}
					data={goal}
				/>
			</li>
			<li className="">
				<StepperAreaChart
					width={300}
					height={300}
					type="bar"
					data={stepper}
				/>
			</li>
		</ul>
	);
};

export default AllCharts;
