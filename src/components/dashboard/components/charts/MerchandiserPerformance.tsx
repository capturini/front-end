"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const data = [
  {
    date: "Lundi",
    "Ahmed B.": 12,
    "Karim M.": 8,
    "Sarah L.": 10,
    "Yasmine A.": 9,
    "Mohamed R.": 11,
  },
  {
    date: "Mardi",
    "Ahmed B.": 10,
    "Karim M.": 11,
    "Sarah L.": 8,
    "Yasmine A.": 7,
    "Mohamed R.": 9,
  },
  {
    date: "Mercredi",
    "Ahmed B.": 8,
    "Karim M.": 9,
    "Sarah L.": 12,
    "Yasmine A.": 10,
    "Mohamed R.": 13,
  },
  {
    date: "Jeudi",
    "Ahmed B.": 15,
    "Karim M.": 10,
    "Sarah L.": 12,
    "Yasmine A.": 9,
    "Mohamed R.": 15,
  },
  {
    date: "Vendredi",
    "Ahmed B.": 0,
    "Karim M.": 0,
    "Sarah L.": 0,
    "Yasmine A.": 0,
    "Mohamed R.": 0,
  },
]

const colors = {
  "Ahmed B.": "#8884d8",
  "Karim M.": "#82ca9d",
  "Sarah L.": "#ffc658",
  "Yasmine A.": "#ff7300",
  "Mohamed R.": "#00C49F"
}

export function MerchandiserPerformance() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="date" 
          stroke="#888888" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Points Vérifiés', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <Legend />
        {Object.keys(colors).map((merchandiser) => (
          <Line
            key={merchandiser}
            type="monotone"
            dataKey={merchandiser}
            stroke={colors[merchandiser as keyof typeof colors]}
            strokeWidth={2}
            dot={{ fill: colors[merchandiser as keyof typeof colors] }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
} 