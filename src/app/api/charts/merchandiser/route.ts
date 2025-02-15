import { NextResponse } from 'next/server'
import type { MerchandiserDailyPerformance, Merchandiser } from '@/types/charts/merchandiser'

export async function GET() {
  // Mock data example
  const merchandisers: Merchandiser[] = [
    { id: "1", name: "Ahmed B.", color: "#8884d8" },
    { id: "2", name: "Karim M.", color: "#82ca9d" },
    { id: "3", name: "Sarah L.", color: "#ffc658" },
    { id: "4", name: "Yasmine A.", color: "#ff7300" },
    { id: "5", name: "Mohamed R.", color: "#00C49F" }
  ]

  const performanceData: MerchandiserDailyPerformance[] = [
    {
      date: "Lundi",
      merchandiserData: {
        "Ahmed B.": 12,
        "Karim M.": 8,
        "Sarah L.": 10,
        "Yasmine A.": 9,
        "Mohamed R.": 11
      }
    },
    // ... more data
  ]

  return NextResponse.json({ merchandisers, performanceData })
} 