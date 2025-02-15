// Models for Wilaya Distribution and Display
export type WilayaDistribution = {
  wilayaName: string
  displayPercentage: number
  totalPoints: number
  activePoints: number
}

export type WilayaPerformance = {
  wilayaName: string
  currentPresence: number
  target: number
  lastWeekPresence: number
} 