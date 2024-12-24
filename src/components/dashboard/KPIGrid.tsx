import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Users,
  ShoppingCart,
  DollarSign,
} from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

const KPICard = ({
  title = "Metric",
  value = "$0",
  change = 0,
  icon = <DollarSign className="h-4 w-4" />,
}: KPICardProps) => {
  const isPositive = change >= 0;

  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          {isPositive ? (
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
          )}
          <span className={isPositive ? "text-green-500" : "text-red-500"}>
            {Math.abs(change)}%
          </span>
          <span className="ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
};

interface KPIGridProps {
  metrics?: {
    totalSales: { value: string; change: number };
    totalOrders: { value: string; change: number };
    totalProducts: { value: string; change: number };
    totalUsers: { value: string; change: number };
  };
}

const KPIGrid = ({
  metrics = {
    totalSales: { value: "$12,345", change: 12.5 },
    totalOrders: { value: "156", change: -2.3 },
    totalProducts: { value: "432", change: 5.7 },
    totalUsers: { value: "2,345", change: 8.1 },
  },
}: KPIGridProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 bg-gray-50">
      <KPICard
        title="Total Sales"
        value={metrics.totalSales.value}
        change={metrics.totalSales.change}
        icon={<DollarSign className="h-4 w-4" />}
      />
      <KPICard
        title="Total Orders"
        value={metrics.totalOrders.value}
        change={metrics.totalOrders.change}
        icon={<ShoppingCart className="h-4 w-4" />}
      />
      <KPICard
        title="Total Products"
        value={metrics.totalProducts.value}
        change={metrics.totalProducts.change}
        icon={<Package className="h-4 w-4" />}
      />
      <KPICard
        title="Total Users"
        value={metrics.totalUsers.value}
        change={metrics.totalUsers.change}
        icon={<Users className="h-4 w-4" />}
      />
    </div>
  );
};

export default KPIGrid;
