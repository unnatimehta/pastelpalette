import { Navbar } from "@/components/dashboard/Navbar";
import type { Metadata } from "next";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
  

export const metadata: Metadata = {
  title: "Dashbaord",
  description: "Admin Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex flex-col w-full mx-auto">
        <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-secondary px-4 sm:px-6 lg:px-8">
            <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 mx-auto">
                <Navbar />
            </nav>
            <Sheet>
  <SheetTrigger asChild>
    <Button className="md:hidden shrink-0" variant={"outline"} size={"icon"}>
        <MenuIcon className="h-5 w-5" />
        
    </Button>
  </SheetTrigger>
  <SheetContent side={"left"}>
  <nav className="flex flex-col gap-6 text-lg font-medium mt-5">
              <Navbar />
            </nav>
   
  </SheetContent>
</Sheet>

        </header>
      {children}
    </div>
  );
}