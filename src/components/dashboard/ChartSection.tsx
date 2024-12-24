import React from "react";
import { Card } from "@/components/ui/card";
import { LineChart, BarChart } from "lucide-react";

interface ChartSectionProps {
  revenueData?: {
    date: string;
    amount: number;
  }[];
  orderStatusData?: {
    status: string;
    count: number;
  }[];
}

const ChartSection = ({
  revenueData = [
    { date: "2024-01", amount: 12000 },
    { date: "2024-02", amount: 15000 },
    { date: "2024-03", amount: 18000 },
    { date: "2024-04", amount: 16000 },
  ],
  orderStatusData = [
    { status: "Pending", count: 45 },
    { status: "Processing", count: 30 },
    { status: "Shipped", count: 20 },
    { status: "Delivered", count: 55 },
  ],
}: ChartSectionProps) => {
  return (
    <div className="w-full h-[400px] bg-background p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <Card className="p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Revenue Trends</h3>
            <LineChart className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* Placeholder for revenue chart */}
            <div className="w-full h-[300px] bg-muted/20 rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">
                Revenue Chart Placeholder
              </span>
            </div>
          </div>
        </Card>

        <Card className="p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Order Status</h3>
            <BarChart className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* Placeholder for order status chart */}
            <div className="w-full h-[300px] bg-muted/20 rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">
                Order Status Chart Placeholder
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChartSection;
