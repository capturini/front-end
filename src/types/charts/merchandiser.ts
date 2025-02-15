// Models for Merchandiser Performance
export type MerchandiserDailyPerformance = {
  date: string
  merchandiserData: {
    [key: string]: number // e.g., "Ahmed B.": 12
  }
}

export type Merchandiser = {
  id: string
  name: string
  color: string
} 