"use client";

import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SidebarItem(props: SidebarItemProps) {
    const { item } = props;
    const { label, icon: Icon, href } = item;

    const pathname = usePathname();

    const activePath = pathname === href;

    return (
        <Link
            href={href}
            className={
                cn(
                    `flex gap-2 mt-2 text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`,
                    activePath && "bg-slate-300/20"
                )
            }
        >
            <Icon className="h-5 w-5" strokeWidth={1} />
            {label}
        </Link>
    )
}
