export default (time: string): string => {
    const [hours, minutes, seconds] = time.split(":");
    return `${hours}:${minutes}`;
};