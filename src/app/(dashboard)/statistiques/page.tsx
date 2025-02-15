import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DisplayGrowth } from "@/components/dashboard/components/charts/DisplayGrowth"
import { WillayaDistribution } from "@/components/dashboard/components/charts/WillayaDistribution"
import { ProductComparison } from "@/components/dashboard/components/charts/ProductComparison"
import { CategoryDistribution } from "@/components/dashboard/components/charts/CategoryDistribution"
import { DisplayByWilaya } from "@/components/dashboard/components/charts/DisplayByWilaya"
import { ProductAvailability } from "@/components/dashboard/components/charts/ProductAvailability"

export default function StatistiquesPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Statistiques de Présence</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Variation Hebdomadaire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+5.2%</div>
            <p className="text-xs text-muted-foreground">vs semaine dernière</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wilayas Actives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">3 nouvelles wilayas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Points de Vente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,285</div>
            <p className="text-xs text-muted-foreground">+15% du mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de Présence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Objectif: 90%</p>
          </CardContent>
        </Card>
      </div>

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
        <Card>
          <CardHeader>
            <CardTitle>Comparaison avec la Concurrence</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductComparison />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Distribution par Produit</CardTitle>
          </CardHeader>
          <CardContent>
            <CategoryDistribution />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Présence par Wilaya vs Objectifs</CardTitle>
          </CardHeader>
          <CardContent>
            <DisplayByWilaya />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Disponibilité Journalière</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductAvailability />
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 