import React from "react";
import Input from "./components/Input";
import Table from "./components/Table";
import mockData from "./tmp/mock-reporting-dates.json";
import { SortOrder, TReportItem } from "./types";
import formatFuzzyTimes from "./utils/formatFuzzyTimes";
import localizeTime from "./utils/localizeTime";
import setToLastDayOfMoth from "./utils/setToLastDayOfMoth";
import sortDataByKey from "./utils/sortDataByKey";

const formattedData = mockData.map((item: TReportItem) => {
	item.nextReportingDate = formatFuzzyTimes(item.nextReportingDate);

	const inferredCheck: Date = item.nextReportingInferred
		? setToLastDayOfMoth(item.nextReportingDate)
		: new Date(item.nextReportingDate);

	item.nextReportingDate = localizeTime(inferredCheck);

	return item;
});

const App = () => {
	const [data, setData] = React.useState<TReportItem[]>(formattedData);
	const [search, setSearch] = React.useState<string | null>(null);
	const [sortKey, setSortKey] = React.useState<string | null>(null);
	const [sort, setSort] = React.useState<SortOrder | null>(SortOrder.NONE);

	const dataFetchedRef = React.useRef(false);

	const filteredData = (): Array<TReportItem> | [] => {
		if (data.length > 0)
			if (search)
				return data?.filter((item: TReportItem) => {
					return item.companyName.toLowerCase().includes(search.toLowerCase());
				});
			else return formattedData;
		return [];
	};

	const sortedData = sortDataByKey(data, sortKey, SortOrder.ASC);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSort = (key: string) => {
		setSortKey(key);
		if (sort === SortOrder.ASC) setSort(SortOrder.DESC);
		else if (sort === SortOrder.DESC) setSort(SortOrder.NONE);
		else setSort(SortOrder.ASC);
	};

	React.useEffect(() => {
		// Will be replaced with a fetch call to the API
		// const mockData = async () => await getData("reporting-dates.json");

		if (dataFetchedRef.current) return;
		dataFetchedRef.current = true;
		setData(formattedData);
	}, []);

	React.useEffect(() => {
		setData(sortedData);
		setSortKey(null);
		setData(filteredData());
	}, [search, sortKey, sort]);

	return (
		<div>
			<Input
				name="search"
				placeholder="Find a company"
				onChange={(e) => handleSearch(e)}
			/>
			<Table
				data={data || []}
				headerKeys={[
					{ name: "Company name", onClick: () => handleSort("companyName") },
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
