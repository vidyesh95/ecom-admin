import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, PackageSearch, UserPlus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface QuickActionsProps {
  onAddProduct?: () => void;
  onProcessOrder?: () => void;
  onManageUsers?: () => void;
}

const QuickActions = ({
  onAddProduct = () => console.log("Add product clicked"),
  onProcessOrder = () => console.log("Process order clicked"),
  onManageUsers = () => console.log("Manage users clicked"),
}: QuickActionsProps) => {
  return (
    <div className="w-full p-4 bg-background border rounded-lg shadow-sm">
      <div className="flex items-center justify-start gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={onAddProduct}
                className="flex items-center gap-2"
                variant="default"
              >
                <PlusCircle className="h-4 w-4" />
                Add Product
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create a new product listing</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={onProcessOrder}
                className="flex items-center gap-2"
                variant="secondary"
              >
                <PackageSearch className="h-4 w-4" />
                Process Order
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View and process pending orders</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={onManageUsers}
                className="flex items-center gap-2"
                variant="outline"
              >
                <UserPlus className="h-4 w-4" />
                Manage Users
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Manage user accounts and permissions</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default QuickActions;
