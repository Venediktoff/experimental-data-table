
export default (
    str: string,
    separators: string[]
): string[] => {
    const regex = new RegExp(separators.join("|"), "g");
    return str.split(regex);
};