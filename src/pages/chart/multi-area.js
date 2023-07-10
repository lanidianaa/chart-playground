import MultiAreaChart from "@/components/multiArea.js";

const dataFromServer = [700, null, null, 700, null, null, 0];
const max = dataFromServer.reduce((a, b) => Math.max(a, b));
const min = dataFromServer.reduce((a, b) => {
	if (a === null) a = b;
	if (b === null) b = a;
	return Math.min(a, b);
});

const labels = ["Jan 23", "Jul 23", "Jan 24", "Jul 24", "Jan 25", "Jul 25", "Jan 26"];

export const data = {
	labels,
	datasets: [
		{
			fill: true,
			label: "Target",
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
		},
		{
			fill: true,
			label: "Target",
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
		},
		{
			fill: true,
			label: "Target",
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
		},
	],
};

const MultiArea = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="border border-rose-200 rounded-lg p-10">
				<MultiAreaChart
					data={data}
					width={320}
					height={320}
				/>
			</div>
		</div>
	);
};

export default MultiArea;
