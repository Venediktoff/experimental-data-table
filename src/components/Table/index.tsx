import React from "react";
import { TTable } from "../../types";
import TableRow from "../TableRow";

const Table = (props: TTable) => {
	const { data, headerKeys } = props;
	return (
		<table>
			<thead>
				<tr>
					{headerKeys.map((headerKey, index) => (
						<th title="Company" key={`header-item-${index}`}>
							<button onClick={headerKey?.onClick}>{headerKey.name}</button>
						</th>
					))}
				</tr>
			</thead>

			<tbody>
				{data?.map((item) => (
					<TableRow data={item} />
				))}
			</tbody>
		</table>
	);
};

export default Table;
