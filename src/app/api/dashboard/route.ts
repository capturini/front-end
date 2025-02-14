// Example API response data
const dashboardData = {
  stats: {
    totalProducts: {
      count: 1285,
      percentageChange: 15,
      timeframe: 'month'
    },
    activeRayons: {
      count: 24,
      newAdditions: 3
    },
    marketShare: {
      percentage: 32,
      competitorDifference: 2
    },
    customerSatisfaction: {
      rating: 4.7,
      totalReviews: 1234
    }
  },

  salesOverview: {
    dailySales: [
      { date: '2024-01-01', revenue: 12500, units: 150 },
      { date: '2024-01-02', revenue: 14200, units: 165 },
      // ... more daily data points
    ],
    totalRevenue: 450000,
    averageOrderValue: 85,
    periodComparison: {
      revenue: 35000,
      percentage: 12.5
    }
  },

  recentSales: [
    {
      id: 'sale_123',
      product: {
        name: 'Premium Widget',
        category: 'Electronics',
        image: '/images/products/widget.jpg'
      },
      amount: 299.99,
      date: '2024-03-15T14:30:00Z',
      customer: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    },
    // ... more recent sales
  ],

  competitorComparison: [
    {
      category: 'Electronics',
      ourPrice: 199.99,
      competitorPrice: 219.99,
      marketAverage: 209.99,
      pricePosition: 'below'
    },
    // ... more category comparisons
  ],

  categoryDistribution: [
    {
      name: 'Electronics',
      productCount: 450,
      revenue: 150000,
      percentageOfTotal: 35
    },
    // ... more categories
  ]
} 