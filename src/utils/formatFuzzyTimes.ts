import { wordToTime } from "./config";
import convertToTimeFormat from "./convertToTimeFormat";
import splitWithMultiple from "./splitWithMultiple";

export default (item: string): string => {

    const [date, time] = splitWithMultiple(item, [
        ", ",
        " ",
    ]);


    if (date && time)
        return `${date} ${wordToTime[time] || convertToTimeFormat(time)}`
    else
        return date
}