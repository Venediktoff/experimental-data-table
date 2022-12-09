import React from "react";
import { TTableRow } from "../../types";

const TableRow = (props: TTableRow) => {
	const { data } = props;
	const {
		companyName,
		lastReportingDate,
		lastReportingPeriod,
		nextReportingDate,
	} = data;

	return (
		<tr>
			<td>{companyName}</td>
			<td>{lastReportingDate}</td>
			<td>{lastReportingPeriod}</td>
			<td>{nextReportingDate}</td>
		</tr>
	);
};

export default TableRow;
