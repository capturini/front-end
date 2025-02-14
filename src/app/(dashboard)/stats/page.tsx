import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/components/charts/Overview"
import { RecentSales } from "@/components/dashboard/components/charts/RecentSales"
import { ProductComparison } from "@/components/dashboard/components/charts/ProductComparison"
import { CategoryDistribution } from "@/components/dashboard/components/charts/CategoryDistribution"

// Since this is a server component, you can fetch directly
async function getDashboardData() {
  const stats = await fetch('/api/dashboard/stats')
  const salesOverview = await fetch('/api/dashboard/sales-overview')
  const recentSales = await fetch('/api/dashboard/recent-sales')
  const competitorComparison = await fetch('/api/dashboard/competitor-comparison')
  const categoryDistribution = await fetch('/api/dashboard/category-distribution')

  return {
    stats: await stats.json(),
    salesOverview: await salesOverview.json(),
    recentSales: await recentSales.json(),
    competitorComparison: await competitorComparison.json(),
    categoryDistribution: await categoryDistribution.json(),
  }
}

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Merchandising Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,285</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Rayons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">3 new rayons added</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Share</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32%</div>
            <p className="text-xs text-muted-foreground">+2% vs competitors</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5</div>
            <p className="text-xs text-muted-foreground">Based on 1,234 reviews</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Product Comparison vs Competitors</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ProductComparison />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Category Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <CategoryDistribution />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

