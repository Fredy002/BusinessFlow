"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CardSummary } from "./components/CardSummary";
import { LastProducts } from "./components/LastProducts";
import { getDataCardsSummary } from "@/lib/constants/CardsSummary.data";

export default function Home() {
  const { translations } = useLanguage();
  const dataCardsSummary = getDataCardsSummary(translations.cardsSummary);

  return (
    <div>
      <h2 className="text-2xl mb-4">
        {translations.sidebarRoutes["Business Flow"]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardsSummary.map((data, index) => (
          <CardSummary key={index} {...data} />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <LastProducts />
        <p>
          {translations.cardsSummary["Sales Distribution"]}
        </p>
      </div>
    </div>
  );
}
