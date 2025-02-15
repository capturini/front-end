"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  {
    wilaya: "Alger",
    "Taux de Présence": 85,
    "Objectif": 90,
  },
  {
    wilaya: "Oran",
    "Taux de Présence": 75,
    "Objectif": 80,
  },
  {
    wilaya: "Constantine",
    "Taux de Présence": 70,
    "Objectif": 75,
  },
  {
    wilaya: "Annaba",
    "Taux de Présence": 65,
    "Objectif": 70,
  },
  {
    wilaya: "Setif",
    "Taux de Présence": 60,
    "Objectif": 65,
  },
]

export function DisplayByWilaya() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="wilaya" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Legend />
        <Bar name="Taux de Présence" dataKey="Taux de Présence" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar name="Objectif" dataKey="Objectif" fill="#1d6ffa" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
} 