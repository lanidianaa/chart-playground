import GoalLineChart from "@/components/goalLine";

const GoalLine = () => {
	const dataFromServer = [10, null, null, null, 50];
	const max = dataFromServer.reduce((a, b) => Math.max(a, b));

	const data = {
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
							[max]: "#0C9955",
						},
					},
				},
			},
		],
	};
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="border border-rose-200 rounded-lg p-10">
				<GoalLineChart
					data={data}
					width={320}
					height={320}
				/>
			</div>
		</div>
	);
};

export default GoalLine;
