import React from 'react'
import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    { name: 'Jan', Sales: 2400, Orders: 320 },
    { name: 'Feb', Sales: 1398, Orders: 280 },
    { name: 'Mar', Sales: 9800, Orders: 540 },
    { name: 'Apr', Sales: 3908, Orders: 390 },
    { name: 'May', Sales: 4800, Orders: 460 },
    { name: 'Jun', Sales: 3800, Orders: 380 },
    { name: 'Jul', Sales: 4300, Orders: 410 },
    { name: 'Aug', Sales: 9800, Orders: 720 },
    { name: 'Sep', Sales: 3908, Orders: 400 },
    { name: 'Oct', Sales: 4800, Orders: 470 },
    { name: 'Nov', Sales: 3800, Orders: 350 },
    { name: 'Dec', Sales: 4300, Orders: 420 }
]

function SalesChart() {
    return (
        <div className="h-[20rem] bg-white p-4 rounded-xl border border-gray-200 flex flex-col flex-1">
            <strong className="font-medium text-gray-700">Monthly Sales & Orders</strong>
            <div className="flex-1 w-full mt-3 text-xs">
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Sales" stroke="#ea580c" />
                        <Line type="monotone" dataKey="Orders" stroke="#3b82f6" /> {/* Add Orders line */}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default SalesChart;
