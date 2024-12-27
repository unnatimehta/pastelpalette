import Link from "next/link";

const links = [
    {
        name: "Home", 
        href: "/shop"
    },
    {
        name: "Dashboard", 
        href: "/dashboard"
    },
    {
        name: "Orders", 
        href: "/dashboard/orders"
    },
    {
        name: "Products", 
        href: "/dashboard/products"
    },
    {
        name: "Banner Pictures", 
        href: "/dashboard/banner"
    },
]

export function Navbar() {
    return(
        <>
        {
            links.map((link) => 
            <Link href={link.href}>
                {link.name}
            </Link>
            )
        }
        </>
    );
}
