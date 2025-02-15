"use client"

import { useState } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const weeklyData = [
  {
    period: "Semaine 1",
    "Points Vérifiés": 180,
    "Objectif": 200,
    "Taux de Complétion": 90,
  },
  {
    period: "Semaine 2",
    "Points Vérifiés": 220,
    "Objectif": 200,
    "Taux de Complétion": 110,
  },
  {
    period: "Semaine 3",
    "Points Vérifiés": 195,
    "Objectif": 200,
    "Taux de Complétion": 97.5,
  },
  {
    period: "Semaine 4",
    "Points Vérifiés": 205,
    "Objectif": 200,
    "Taux de Complétion": 102.5,
  },
]

const monthlyData = [
  {
    period: "Janvier",
    "Points Vérifiés": 800,
    "Objectif": 850,
    "Taux de Complétion": 94,
  },
  {
    period: "Février",
    "Points Vérifiés": 920,
    "Objectif": 850,
    "Taux de Complétion": 108,
  },
  {
    period: "Mars",
    "Points Vérifiés": 880,
    "Objectif": 850,
    "Taux de Complétion": 103,
  },
  {
    period: "Avril",
    "Points Vérifiés": 900,
    "Objectif": 850,
    "Taux de Complétion": 106,
  },
]

const yearlyData = [
  {
    period: "2023 T1",
    "Points Vérifiés": 2400,
    "Objectif": 2500,
    "Taux de Complétion": 96,
  },
  {
    period: "2023 T2",
    "Points Vérifiés": 2600,
    "Objectif": 2500,
    "Taux de Complétion": 104,
  },
  {
    period: "2023 T3",
    "Points Vérifiés": 2550,
    "Objectif": 2500,
    "Taux de Complétion": 102,
  },
  {
    period: "2023 T4",
    "Points Vérifiés": 2700,
    "Objectif": 2500,
    "Taux de Complétion": 108,
  },
]

type TimePeriod = 'weekly' | 'monthly' | 'yearly'

export function WeeklyPerformance() {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('weekly')

  const getData = () => {
    switch (timePeriod) {
      case 'monthly':
        return monthlyData
      case 'yearly':
        return yearlyData
      default:
        return weeklyData
    }
  }

  const getTitle = () => {
    switch (timePeriod) {
      case 'monthly':
        return 'Performance Mensuelle'
      case 'yearly':
        return 'Performance Annuelle'
      default:
        return 'Performance Hebdomadaire'
    }
  }

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-end">
        <Select
          value={timePeriod}
          onValueChange={(value) => setTimePeriod(value as TimePeriod)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sélectionner la période" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Hebdomadaire</SelectItem>
            <SelectItem value="monthly">Mensuelle</SelectItem>
            <SelectItem value="yearly">Annuelle</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={getData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="period" 
            stroke="#888888" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis
            yAxisId="left"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            label={{ value: 'Nombre de Points', angle: -90, position: 'insideLeft' }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            label={{ value: 'Taux de Complétion (%)', angle: 90, position: 'insideRight' }}
          />
          <Tooltip />
          <Legend />
          <Bar 
            yAxisId="left"
            name="Points Vérifiés" 
            dataKey="Points Vérifiés" 
            fill="#8884d8" 
            radius={[4, 4, 0, 0]} 
          />
          <Bar 
            yAxisId="left"
            name="Objectif" 
            dataKey="Objectif" 
            fill="#82ca9d" 
            radius={[4, 4, 0, 0]} 
          />
          <Bar 
            yAxisId="right"
            name="Taux de Complétion" 
            dataKey="Taux de Complétion" 
            fill="#ffc658" 
            radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 