import React, { useState } from "react";
import Sidebar from "./dashboard/Sidebar";
import KPIGrid from "./dashboard/KPIGrid";
import ChartSection from "./dashboard/ChartSection";
import ActivityFeed from "./dashboard/ActivityFeed";
import QuickActions from "./dashboard/QuickActions";
import DataTable from "./dashboard/DataTable";

interface HomeProps {
  metrics?: {
    totalSales: { value: string; change: number };
    totalOrders: { value: string; change: number };
    totalProducts: { value: string; change: number };
    totalUsers: { value: string; change: number };
  };
}

const Home = ({
  metrics = {
    totalSales: { value: "$45,231", change: 12.5 },
    totalOrders: { value: "356", change: -2.3 },
    totalProducts: { value: "789", change: 5.7 },
    totalUsers: { value: "2,345", change: 8.1 },
  },
}: HomeProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-4 space-y-6">
          {/* Quick Actions Section */}
          <QuickActions />

          {/* KPI Grid Section */}
          <KPIGrid metrics={metrics} />

          {/* Charts and Activity Feed Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Charts take up 2/3 of the space */}
            <div className="lg:col-span-2">
              <ChartSection />
            </div>

            {/* Activity Feed takes up 1/3 of the space */}
            <div className="lg:col-span-1">
              <ActivityFeed />
            </div>
          </div>

          {/* Data Table Section */}
          <DataTable />
        </div>
      </main>
    </div>
  );
};

export default Home;
