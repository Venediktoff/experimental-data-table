import React from "react";
import { TReportItem } from "../../types";

type TTable = {
	data: Array<TReportItem>;
	headerKeys: Array<{
		name: string;
		onClick: () => void;
	}>;
};

const Table = (props: TTable) => {
	const { data, headerKeys } = props;

	return (
		<table className="min-w-full text-xs">
			<thead className="rounded-t-lg dark:bg-gray-700">
				<tr className="text-left">
					{headerKeys.map((headerKey, index) => (
						<th title="Company" className="p-3" key={`header-item-${index}`}>
							<button onClick={() => headerKey.onClick()}>
								{headerKey.name}
							</button>
						</th>
					))}
				</tr>
			</thead>
		</table>
	);
};

export default Table;
