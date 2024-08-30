import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/saga-blue/theme.css";  // Import your preferred PrimeReact theme
import "primereact/resources/primereact.min.css";          // PrimeReact core styles
// import "primeicons/primeicons.css";
import '../../assets/Calender.css';

export default function CalendarComponent() {
    const [date, setDate] = useState(new Date()); // Set initial state to current date

    return (
        <div className="flex px-5 pt-5 bg-white rounded-md pb-7 card justify-content-center">
            <Calendar 
                value={date} 
                onChange={(e) => setDate(e.value)} 
                inline 
                showWeek 
                touchUI={false}
                showIcon={true}
                className="custom-calendar small-calendar" // Add a custom class for styling
            />
        </div>
    );
}
