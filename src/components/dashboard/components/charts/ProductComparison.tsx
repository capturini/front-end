"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Electronics",
    ours: 4000,
    competitor1: 2400,
    competitor2: 2400,
  },
  {
    name: "Clothing",
    ours: 3000,
    competitor1: 1398,
    competitor2: 2210,
  },
  {
    name: "Home",
    ours: 2000,
    competitor1: 9800,
    competitor2: 2290,
  },
  {
    name: "Food",
    ours: 2780,
    competitor1: 3908,
    competitor2: 2000,
  },
  {
    name: "Beauty",
    ours: 1890,
    competitor1: 4800,
    competitor2: 2181,
  },
]

export function ProductComparison() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="ours" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="competitor1" fill="#fa1d1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="competitor2" fill="#1d6ffa" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ProductComparison