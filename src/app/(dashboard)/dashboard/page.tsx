import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DisplayGrowth } from "@/components/dashboard/components/charts/DisplayGrowth"
import { WillayaDistribution } from "@/components/dashboard/components/charts/WillayaDistribution"
import { ProductComparison } from "@/components/dashboard/components/charts/ProductComparison"
import { MerchandiserPerformance } from "@/components/dashboard/components/charts/MerchandiserPerformance"
import { WeeklyPerformance } from "@/components/dashboard/components/charts/WeeklyPerformance"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Points de Vente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,285</div>
            <p className="text-xs text-muted-foreground">+15% ce mois</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produits Actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 nouveaux</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de Présence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">+5% cette semaine</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wilayas Couvertes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">Sur 58 wilayas</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Évolution de la Présence</CardTitle>
          </CardHeader>
          <CardContent>
            <DisplayGrowth />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribution par Wilaya</CardTitle>
          </CardHeader>
          <CardContent>
            <WillayaDistribution />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Comparaison avec la Concurrence</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductComparison />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Performance Journalière des Merchandisers</CardTitle>
          </CardHeader>
          <CardContent>
            <MerchandiserPerformance />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Performance Hebdomadaire</CardTitle>
          </CardHeader>
          <CardContent>
            <WeeklyPerformance />
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Activités Récentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Mise à jour du display - Alger Centre</p>
                <p className="text-sm text-muted-foreground">Il y a 2 heures</p>
              </div>
              <span className="text-green-600 text-sm">Complété</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Nouveau point de vente - Oran</p>
                <p className="text-sm text-muted-foreground">Il y a 5 heures</p>
              </div>
              <span className="text-blue-600 text-sm">En cours</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Audit de présence - Constantine</p>
                <p className="text-sm text-muted-foreground">Il y a 1 jour</p>
              </div>
              <span className="text-green-600 text-sm">Complété</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 