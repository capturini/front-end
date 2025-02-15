// Models for Product Distribution and Comparison
export type ProductCategory = {
  name: string      // e.g., "Jus de Fruits 1L"
  value: number     // Number of points with this product
  percentage: number
}

export type ProductComparison = {
  category: string
  competitors: {
    [key: string]: number  // e.g., "Ramy": 85, "Touja": 70
  }
}

export type ProductAvailability = {
  timestamp: string
  availability: number
  totalPoints: number
  checkedPoints: number
} 