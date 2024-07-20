import { Input } from "@/components/ui/input"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import { UserButton } from "@clerk/nextjs"
import { Menu, Search } from "lucide-react"
import { SidebarRoutes } from "../SidebarRoutes"
import { ToggleTheme } from "../ToggleTheme"

export function Navbar() {
    return (
        <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">

            {/* Mobile */}
            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger className="flex items-center">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SidebarRoutes />
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop */}
            <div className="relative w-[300px]">
                <Input placeholder="Search" className="rounded-lg" />
                <Search className="absolute top-2 right-2" strokeWidth={1} />
            </div>

            <div className="flex gap-x-2 items-center">
                {/*
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center">
                        <Globe className="w-5 h-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => changeLanguage('en')}>
                            English
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => changeLanguage('es')}>
                            Español
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                */}
                <ToggleTheme />
                <UserButton />
            </div>
        </nav>
    )
}