import React from "react";
import { TReportItem } from "../../types";

type TTable = {
	data: Array<TReportItem>;
	headerKeys: Array<{
		name: string;
		sortKey?: string;
		onClick?: () => void;
	}>;
};

const Table = (props: TTable) => {
	const { data, headerKeys } = props;
	console.log(data);
	return (
		<table>
			<thead>
				<tr>
					{headerKeys.map((headerKey, index) => (
						<th title="Company" key={`header-item-${index}`}>
							<button onClick={() => headerKey?.onClick}>
								{headerKey.name}
							</button>
						</th>
					))}
				</tr>
			</thead>

			<tbody>
				{data?.map((item) => (
					<tr>
						<td>{item.companyName}</td>
						<td>{item.lastReportingDate}</td>
						<td>{item.lastReportingPeriod}</td>
						<td>{item.nextReportingDate}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
