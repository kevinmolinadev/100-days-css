import { useState, useEffect } from "react";
export const TemplateDate = () => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, [date]);
    const year = date.getFullYear();
    const month = months[date.getMonth()].toLocaleUpperCase().slice(0, 3);
    const day = days[date.getDay()].toLocaleUpperCase().slice(0, 3);
    const dateOfMonth = date.getDate();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const DateTemplatete = {
        year,
        month,
        day,
        dateOfMonth,
        hour,
        minute,
        second
    }
    return DateTemplatete;
}
