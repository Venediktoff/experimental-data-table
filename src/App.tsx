import React from "react";
import Table from "./components/Table";
import mockData from "./tmp/mock-reporting-dates.json";
import { TReportItem } from "./types";

const App = () => {
	const [data, setData] = React.useState<TReportItem[] | []>(mockData);

	React.useEffect(() => {
		// Will be replaced with a fetch call to the API
		// const mockData = async () => await getData("reporting-dates.json");

		setData(mockData);
	}, []);

	return (
		<div>
			<Table
				data={data}
				headerKeys={[
					{ name: "Company name", onClick: () => console.log("Company name") },
					{
						name: "Last reporting date",
					},
					{
						name: "Last reporting period",
					},
					{
						name: "Next reporting date",
					},
				]}
			/>
		</div>
	);
};

export default App;
