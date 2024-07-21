"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { SidebarItem } from "../SidebarItem";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { getGeneralSidebarData, getToolsSidebarData, getSupportSidebarData } from "@/lib/constants/SidebarRoutes.data";

export function SidebarRoutes() {
    const { translations } = useLanguage();

    const generalSidebarData = getGeneralSidebarData(translations.sidebarRoutes);
    const toolsSidebarData = getToolsSidebarData(translations.sidebarRoutes);
    const supportSidebarData = getSupportSidebarData(translations.sidebarRoutes);

    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="p-2 md:p-6">
                    <p>
                        {translations.sidebarRoutes["General"]}
                    </p>
                    {generalSidebarData.map((item, index) => (
                        <SidebarItem key={index.toString()} item={item} />
                    ))}
                </div>

                <Separator />
                <div className="p-2 md:p-6">
                    <p>
                        {translations.sidebarRoutes["Tools"]}
                    </p>
                    {toolsSidebarData.map((item, index) => (
                        <SidebarItem key={index.toString()} item={item} />
                    ))}
                </div>

                <Separator />
                <div className="p-2 md:p-6">
                    <p>
                        {translations.sidebarRoutes["Support"]}
                    </p>
                    {supportSidebarData.map((item, index) => (
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
                    Developed by{" "}
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
