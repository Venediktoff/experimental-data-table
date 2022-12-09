import React from "react";
import Table from "./components/Table";
import * as mockData from "./tmp/mock-reporting-dates.json";
const App = () => {
	return (
		<div>
			<Table
				data={mockData}
				headerKeys={[
					{ name: "Company name", onClick: () => console.log("Company name") },
					{
						name: "Last reporting date",
						onClick: () => console.log("Last reporting date"),
					},
					{
						name: "Last reporting period",
						onClick: () => console.log("Last reporting period"),
					},
					{
						name: "Next reporting date",
						onClick: () => console.log("Next reporting date"),
					},
				]}
			/>
		</div>
	);
};

export default App;
