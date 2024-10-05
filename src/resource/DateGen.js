

export function getDate(){
    const start = new Date(2024, 2, 1);
    const end = new Date(2024, 11, );

    const randomDate = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    const options = {month: "short", day: "numeric", weekday: "short"};
    return randomDate.toLocaleDateString("en-US", options);

}