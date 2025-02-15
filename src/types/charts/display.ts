// Models for Display Growth and Overall Metrics
export type DisplayGrowth = {
  date: string
  coverage: number
  target: number
  growthRate: number
}

export type DisplayMetrics = {
  totalPoints: number
  activeWilayas: number
  displayRate: number
  weeklyChange: number
  monthlyTarget: number
  currentCompletion: number
} 