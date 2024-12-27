"use client";
import { Avatar } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

// hardcoded
const recentSales = [
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    amount: "250.00",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Michael Chen",
    email: "michael.c@example.com",
    amount: "150.00",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Emma Wilson",
    email: "emma.w@example.com",
    amount: "350.00",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "David Kim",
    email: "david.k@example.com",
    amount: "450.00",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    amount: "$550.00",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    amount: "250.00",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Michael Chen",
    email: "michael.c@example.com",
    amount: "150.00",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Emma Wilson",
    email: "emma.w@example.com",
    amount: "350.00",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "David Kim",
    email: "david.k@example.com",
    amount: "450.00",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    amount: "$550.00",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    amount: "250.00",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Michael Chen",
    email: "michael.c@example.com",
    amount: "150.00",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Emma Wilson",
    email: "emma.w@example.com",
    amount: "350.00",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "David Kim",
    email: "david.k@example.com",
    amount: "450.00",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    amount: "$550.00",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    amount: "250.00",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Michael Chen",
    email: "michael.c@example.com",
    amount: "150.00",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Emma Wilson",
    email: "emma.w@example.com",
    amount: "350.00",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "David Kim",
    email: "david.k@example.com",
    amount: "450.00",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    amount: "$550.00",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    amount: "250.00",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Michael Chen",
    email: "michael.c@example.com",
    amount: "150.00",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Emma Wilson",
    email: "emma.w@example.com",
    amount: "350.00",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "David Kim",
    email: "david.k@example.com",
    amount: "450.00",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    amount: "$550.00",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  },
];

export function RecentSales() {
  return (
    <ScrollArea className="h-[450px]">
    <div className="space-y-6 ">
      {recentSales.map((sale) => (
        <div className="flex items-center">
          <Avatar className="h-16 w-16">
            <img
              src={sale.avatar}
              alt={sale.name}
              className="h-full w-full object-cover"
            />
          </Avatar>
          <div className="ml-4">
            <p className="text-lg font-medium">{sale.name}</p>
            <p className="text-base text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium text-green-500 text-xl">
            ₹{sale.amount}
          </div>
        </div>
      ))}
    </div>
    </ScrollArea>
  );
}