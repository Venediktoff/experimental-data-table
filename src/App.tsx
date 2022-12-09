import React, { useRef } from "react";
import Input from "./components/Input";
import Table from "./components/Table";
import mockData from "./tmp/mock-reporting-dates.json";
import { TReportItem } from "./types";
import formatFuzzyTimes from "./utils/formatFuzzyTimes";
import localizeTime from "./utils/localizeTime";
import setToLastDayOfMoth from "./utils/setToLastDayOfMoth";

const App = () => {
	const [data, setData] = React.useState<TReportItem[] | undefined>(undefined);
	const [search, setSearch] = React.useState<string | null>(null);
	const dataFetchedRef = useRef(false);

	const formatData = () => {
		const formattedData = mockData.map((item: TReportItem) => {
			item.nextReportingDate = formatFuzzyTimes(item.nextReportingDate);

			const inferredCheck: Date = item.nextReportingInferred
				? setToLastDayOfMoth(item.nextReportingDate)
				: new Date(item.nextReportingDate);

			item.nextReportingDate = localizeTime(inferredCheck);

			return item;
		});

		setData(formattedData);
	};
	React.useEffect(() => {
		// Will be replaced with a fetch call to the API
		// const mockData = async () => await getData("reporting-dates.json");
		if (dataFetchedRef.current) return;
		dataFetchedRef.current = true;
		formatData();
	}, []);

	const filteredData = (): Array<TReportItem> | undefined => {
		if (data)
			if (search)
				return data?.filter((item: TReportItem) => {
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
				data={filteredData() || []}
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
