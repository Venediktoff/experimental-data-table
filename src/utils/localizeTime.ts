export default (rawDate) => new Date(rawDate).toLocaleDateString(
    "en-GB",
    {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    }
);