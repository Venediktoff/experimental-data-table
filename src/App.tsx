import React from "react";
import Input from "./components/Input";
import Table from "./components/Table";
import mockData from "./tmp/mock-reporting-dates.json";
import { TReportItem } from "./types";

const App = () => {
	const [data, setData] = React.useState<TReportItem[] | []>(mockData);
	const [search, setSearch] = React.useState<string | null>(null);

	React.useEffect(() => {
		// Will be replaced with a fetch call to the API
		// const mockData = async () => await getData("reporting-dates.json");

		setData(mockData);
	}, []);

	const filteredData = () => {
		if (search)
			return data.filter((item: TReportItem) => {
				return item.companyName.toLowerCase().includes(search.toLowerCase());
			});
		else return data;
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<div>
			<Input
				name="search"
				placeholder="Find a company"
				onChange={(e) => handleSearch(e)}
			/>
			<Table
				data={filteredData()}
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
