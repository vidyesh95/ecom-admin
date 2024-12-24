import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  MessageSquare,
  Users,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Package, label: "Products", href: "/products" },
  { icon: ShoppingCart, label: "Orders", href: "/orders" },
  { icon: MessageSquare, label: "Reviews", href: "/reviews" },
  { icon: Users, label: "Users", href: "/users" },
  { icon: Truck, label: "Logistics", href: "/logistics" },
];

const Sidebar = ({ collapsed = false, onToggle = () => {} }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    onToggle();
  };

  return (
    <div
      className={`bg-slate-900 h-screen transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } flex flex-col`}
    >
      {/* Logo Area */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700">
        {!isCollapsed && (
          <span className="text-white text-xl font-bold">Admin</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-400 hover:text-white"
          onClick={handleToggle}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation Menu */}
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-2 px-2">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800 ${
                isCollapsed ? "px-2" : "px-4"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </Button>
          ))}
        </nav>
      </ScrollArea>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-700">
        <Button
          variant="ghost"
          className={`w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800 ${
            isCollapsed ? "px-2" : "px-4"
          }`}
        >
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
            alt="User"
            className="h-6 w-6 rounded-full"
          />
          {!isCollapsed && <span className="ml-3">Admin User</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
