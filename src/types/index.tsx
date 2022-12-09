export type TReportItem = {
	companyName: string;
	lastReportingDate: string;
	lastReportingPeriod: string;
	nextReportingDate: string;
	nextReportingInferred: boolean;
};

export type TTableRow = {
	data: {
		companyName: string;
		lastReportingDate: string;
		lastReportingPeriod: string;
		nextReportingDate: string;
	};
};

export type TTable = {
	data: Array<TReportItem> | [];
	headerKeys: Array<{
		name: string;
		sortKey?: string;
		onClick?: () => void;
	}>;
	children?: React.ReactNode;
};

export enum SortOrder {
	ASC = "ASC",
	DESC = "DESC",
	NONE = "NONE",
}
