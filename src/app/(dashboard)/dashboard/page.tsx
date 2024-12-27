import { RecentSales } from "@/components/dashboard/RecentSales";
import { RevenueChart } from "@/components/dashboard/RevenueChart";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { businessDetails } from "@/lib/data";
import {
  BarChart3,
  IndianRupee,
  Package,
  ShoppingBag,
  Users,
} from "lucide-react";
import React from "react";

function Dashboard() {
  //hardcoded
  const stats = [
    {
      title: "Total Revenue",
      value: "₹123.23",
      description: "Based on 100 Charges",
      icon: IndianRupee,
      color: "green-500",
    },
    {
      title: "Total Sales",
      value: "34",
      description: `Total Sales on ${businessDetails.name}`,
      icon: ShoppingBag,
      color: "blue-500",
    },
    {
      title: "Total Products",
      value: "23",
      description: "Current Products",
      icon: Package,
      color: "indigo-500",
    },
    {
      title: "Total User",
      value: "34",
      description: "Total Users Signed-in",
      icon: Users,
      color: "orange-500",
    },
  ];
  return (
    <>
      <div className="flex-1 space-y-4 p-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                  <div>
                    <h2 className="text-base font-medium text-primary">
                      {stat.title}
                    </h2>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 p-6">
            <div className="flex flex-col space-y-2">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-medium">Revenue Over Time</h3>
                  </div>
                </CardTitle>
              </CardHeader>

              <RevenueChart />
            </div>
          </Card>
          <Card className="col-span-3 p-6">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-medium">Recent Sales</h3>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>

                  <RecentSales />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;