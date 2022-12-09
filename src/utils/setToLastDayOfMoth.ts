export default (unclear) => {
    const date = new Date(unclear);
    console.log(date)
    const lastDayOfMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();
    date.setDate(lastDayOfMonth);
    return date;
};