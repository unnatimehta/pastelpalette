import { Navbar } from "@/components/dashboard/Navbar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { businessDetails } from "@/lib/data";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { MenuIcon } from "lucide-react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore }  from "next/cache";

export const metadata: Metadata = {
  title: "Dashbaord",
  description: "Admin Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  noStore();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(!user || user.email !== businessDetails.adminEmail){
    return redirect("/")
  }


  return (
    <div className="flex flex-col w-full mx-auto">
        <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-secondary px-4 sm:px-6 lg:px-8">
            <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 mx-auto">
                <Navbar />
            </nav>
            <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              variant="outline"
              size="icon"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-6 text-lg font-medium mt-5">
              <Navbar />
            </nav>
          </SheetContent>
        </Sheet>
        </header>
        <main className="my-5 px-4 sm:px-6 lg:px-8">
      {children}
        </main>
    </div>
  );
}
