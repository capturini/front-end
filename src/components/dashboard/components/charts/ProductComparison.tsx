"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  {
    category: "Jus de Fruits",
    Ramy: 85,
    Touja: 70,
    Tazej: 60,
  },
  {
    category: "Sodas",
    Ramy: 80,
    Touja: 65,
    Tazej: 55,
  },
  {
    category: "Nectar",
    Ramy: 75,
    Touja: 60,
    Tazej: 50,
  },
]

export function ProductComparison() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="category" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Legend />
        <Bar name="Ramy" dataKey="Ramy" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar name="Touja" dataKey="Touja" fill="#fa1d1d" radius={[4, 4, 0, 0]} />
        <Bar name="Tazej" dataKey="Tazej" fill="#1d6ffa" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ProductComparison