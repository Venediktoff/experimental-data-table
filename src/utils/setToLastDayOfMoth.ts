export default (unclear) => {
    const date = new Date(unclear);
    const lastDayOfMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    date.setDate(lastDayOfMonth);
    return date;
};