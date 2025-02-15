import { NextResponse } from 'next/server'
import type { WilayaDistribution, WilayaPerformance } from '@/types/charts/wilaya'

export async function GET() {
  const wilayaDistribution: WilayaDistribution[] = [
    {
      wilayaName: "Alger",
      displayPercentage: 30,
      totalPoints: 450,
      activePoints: 385
    },
    // ... more data
  ]

  const wilayaPerformance: WilayaPerformance[] = [
    {
      wilayaName: "Alger",
      currentPresence: 85,
      target: 90,
      lastWeekPresence: 82
    },
    // ... more data
  ]

  return NextResponse.json({ wilayaDistribution, wilayaPerformance })
} 