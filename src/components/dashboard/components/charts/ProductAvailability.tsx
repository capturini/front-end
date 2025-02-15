"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const data = [
  { time: "8h", disponibilité: 95 },
  { time: "10h", disponibilité: 85 },
  { time: "12h", disponibilité: 75 },
  { time: "14h", disponibilité: 80 },
  { time: "16h", disponibilité: 90 },
  { time: "18h", disponibilité: 85 },
]

export function ProductAvailability() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis tickFormatter={(value) => `${value}%`} />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          name="Disponibilité Produits"
          dataKey="disponibilité" 
          stroke="#8884d8" 
          strokeWidth={2}
          dot={{ fill: "#8884d8" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
} 