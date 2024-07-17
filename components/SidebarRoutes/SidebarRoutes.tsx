"use client";

import { GeneralSidebarData, SupportSidebarData, ToolsSidebarData } from "@/lib/constants/SidebarRoutes.data";
import { SidebarItem } from "../SidebarItem";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export function SidebarRoutes() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="p-2 md:p-6">
                    <p>
                        GENERAL
                    </p>
                    {GeneralSidebarData.map((item, index) => (
                        <SidebarItem key={index.toString()} item={item} />
                    ))}
                </div>

                <Separator />
                <div className="p-2 md:p-6">
                    <p>
                        TOOLS
                    </p>
                    {ToolsSidebarData.map((item, index) => (
                        <SidebarItem key={index.toString()} item={item} />
                    ))}
                </div>

                <Separator />
                <div className="p-2 md:p-6">
                    <p>
                        TOOLS
                    </p>
                    {SupportSidebarData.map((item, index) => (
                        <SidebarItem key={index.toString()} item={item} />
                    ))}
                </div>
            </div>

            <div>
                <div className="text-center p-6">
                    <Button variant="outline" className="w-full">
                        Upgrade Plan
                    </Button>
                </div>

                <Separator />
                <footer className="text-center p-3 xl:mt-0 mt-3 ">
                    Debeloped by{" "}
                    <a
                        href="https://github.com/fredy002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Fredy
                    </a>
                </footer>
            </div>
        </div>
    )
}
