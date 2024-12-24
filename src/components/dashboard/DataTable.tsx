import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown } from "lucide-react";

interface DataTableProps {
  data?: Array<{
    id: string;
    name: string;
    status: "active" | "inactive" | "pending";
    date: string;
    value: string;
  }>;
  onSearch?: (value: string) => void;
  onSort?: (column: string) => void;
}

const defaultData = [
  {
    id: "1",
    name: "Sample Item 1",
    status: "active",
    date: "2024-01-01",
    value: "$100.00",
  },
  {
    id: "2",
    name: "Sample Item 2",
    status: "pending",
    date: "2024-01-02",
    value: "$200.00",
  },
  {
    id: "3",
    name: "Sample Item 3",
    status: "inactive",
    date: "2024-01-03",
    value: "$300.00",
  },
] as const;

const DataTable = ({
  data = defaultData,
  onSearch = () => {},
  onSort = () => {},
}: DataTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "inactive":
        return "bg-red-500";
      case "pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search..."
            className="pl-8"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          Filter
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => onSort("name")}
              >
                Name
                <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => onSort("date")}
              >
                Date
                <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${getStatusColor(item.status)} text-white`}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell className="text-right">{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
