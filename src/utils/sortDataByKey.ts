import { SortOrder, TReportItem } from "../types";

export default (data: Array<TReportItem>, key, order) => {
    if (!key || key in data[0] === false) return data;

    return data.sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];
        if (order === SortOrder.ASC) {
            return valueA > valueB ? 1 : -1;
        }
        return valueA < valueB ? 1 : -1;
    });
}
