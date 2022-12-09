import { wordToTime } from "./config";
import splitWithMultiple from "./splitWithMultiple";

export default (item: string): string => {

    let sameFormatDates = item.replace(new RegExp(/\//ig), '-')
    const [date, time] = splitWithMultiple(sameFormatDates, [
        ", ",
        " ",
    ]);

    const [hours, minutes, seconds] = time ? time.split(":") : ["00", "00", "00"];

    if (date && time) {
        return `${date} ${wordToTime[time] || `${hours}:${minutes}`}`
    }
    else
        return date
}