import React from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Package, CreditCard, MessageSquare } from "lucide-react";

interface ActivityItem {
  id: string;
  type: "order" | "user" | "product" | "payment" | "review";
  title: string;
  description: string;
  timestamp: string;
  user: {
    name: string;
    avatar: string;
  };
}

interface ActivityFeedProps {
  activities?: ActivityItem[];
}

const defaultActivities: ActivityItem[] = [
  {
    id: "1",
    type: "order",
    title: "New Order Placed",
    description: "Order #12345 was placed for $299.99",
    timestamp: "5 minutes ago",
    user: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
  },
  {
    id: "2",
    type: "user",
    title: "New User Registration",
    description: "A new user account was created",
    timestamp: "15 minutes ago",
    user: {
      name: "Sarah Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
  },
  {
    id: "3",
    type: "product",
    title: "Product Update",
    description: "Inventory updated for Product SKU-789",
    timestamp: "1 hour ago",
    user: {
      name: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    },
  },
  {
    id: "4",
    type: "review",
    title: "New Product Review",
    description: "5-star review received for Product XYZ",
    timestamp: "2 hours ago",
    user: {
      name: "Emma Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    },
  },
];

const getActivityIcon = (type: ActivityItem["type"]) => {
  switch (type) {
    case "order":
      return <Package className="h-4 w-4" />;
    case "user":
      return <User className="h-4 w-4" />;
    case "payment":
      return <CreditCard className="h-4 w-4" />;
    case "review":
      return <MessageSquare className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const ActivityFeed = ({
  activities = defaultActivities,
}: ActivityFeedProps) => {
  return (
    <Card className="w-full h-full bg-white dark:bg-gray-800 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <Badge variant="secondary">{activities.length} new</Badge>
      </div>

      <ScrollArea className="h-[500px] pr-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Avatar className="h-8 w-8">
                <img src={activity.user.avatar} alt={activity.user.name} />
              </Avatar>

              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{activity.title}</span>
                  {getActivityIcon(activity.type)}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.description}
                </p>
                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{activity.user.name}</span>
                  <span>•</span>
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ActivityFeed;
