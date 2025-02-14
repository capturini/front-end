// Stats Card Types
interface DashboardStats {
  totalProducts: {
    count: number;
    percentageChange: number;
    timeframe: 'month' | 'week' | 'day';
  };
  activeRayons: {
    count: number;
    newAdditions: number;
  };
  marketShare: {
    percentage: number;
    competitorDifference: number;
  };
  customerSatisfaction: {
    rating: number;
    totalReviews: number;
  };
}

// Sales Overview Chart Types
interface SalesData {
  date: string;
  revenue: number;
  units: number;
}

interface SalesOverview {
  dailySales: SalesData[];
  totalRevenue: number;
  averageOrderValue: number;
  periodComparison: {
    revenue: number;
    percentage: number;
  };
}

// Recent Sales Types
interface RecentSale {
  id: string;
  product: {
    name: string;
    category: string;
    image: string;
  };
  amount: number;
  date: string;
  customer: {
    name: string;
    email: string;
  };
}

// Product Comparison Types
interface CompetitorComparison {
  category: string;
  ourPrice: number;
  competitorPrice: number;
  marketAverage: number;
  pricePosition: 'above' | 'below' | 'average';
}

// Category Distribution Types
interface CategoryStats {
  name: string;
  productCount: number;
  revenue: number;
  percentageOfTotal: number;
} 