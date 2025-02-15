// Models for Weekly/Monthly/Yearly Performance
export type PerformancePeriod = {
  period: string
  pointsChecked: number
  target: number
  completionRate: number
  merchandiserCount: number
}

export type PerformanceMetrics = {
  weekly: PerformancePeriod[]
  monthly: PerformancePeriod[]
  yearly: PerformancePeriod[]
} 