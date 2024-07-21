import { BookOpenCheck, KeyboardMusic, Waypoints } from "lucide-react";

export const getDataCardsSummary = (translations: { [key: string]: string }) => [
    {
        icon: KeyboardMusic,
        total: "100",
        average: 5,
        title: translations["Products Created"],
        tooltipText: translations["See all products created"],
    },
    {
        icon: Waypoints,
        total: "86.5%",
        average: 35,
        title: translations["Total Revenue"],
        tooltipText: translations["See all of the revenue"],
    },
    {
        icon: BookOpenCheck,
        total: "S/. 265",
        average: 80,
        title: translations["Bounce Rate"],
        tooltipText: translations["See all of the bounce rate"],
    },
];
