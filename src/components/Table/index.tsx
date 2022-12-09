import React from "react";
import { TReportItem } from "../../types";

type TTable = {
	data: Array<TReportItem>;
	headerKeys: Array<string>;
};

const Table = (props) => {
	const { data, headerKeys } = props;

	return (
		<table className="min-w-full text-xs">
			<thead className="rounded-t-lg dark:bg-gray-700">
				<tr className="text-left">
					<th title="Company" className="p-3">
						<button onClick={() => console.log("sort")}>Company</button>
					</th>
					<th title="Last reporting date" className="p-3">
						Last reporting date
					</th>
					<th title="Last reporting period" className="p-3">
						Last reporting period
					</th>
					<th title="Next reporting date" className="p-3">
						Next reporting date
					</th>
				</tr>
			</thead>
		</table>
	);
};

export default Table;
