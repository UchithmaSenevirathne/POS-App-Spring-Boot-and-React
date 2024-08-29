import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function Calender() {
    const [date, setDate] = useState(null);

    return (
        <div className="flex card justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
        </div>

    )
}
        