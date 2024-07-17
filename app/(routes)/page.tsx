import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, KeyboardMusic, Waypoints } from "lucide-react";

export const dataCardsSummary = [
  {
    icon: KeyboardMusic,
    total: "100",
    average: 5,
    title: "Products Created",
    tooltipText: "See all products created",
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    title: "Total Revenue",
    tooltipText: "See all of the revenue",
  },
  {
    icon: BookOpenCheck,
    total: "S/. 265",
    average: 80,
    title: "Bounce Rate",
    tooltipText: "See all of the bounce rate",
  },
];

export default function Home() {
  return (
    <div>
      <UserButton />
      <h2 className="text-2xl mb-4">
        Business Flow
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardsSummary.map((data, index) => (
          <CardSummary key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
