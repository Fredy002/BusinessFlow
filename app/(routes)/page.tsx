import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";

export default function Home() {
  return (
    <div>
      <UserButton />
      <h2 className="text-2xl mb-4">
        Business Flow
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <CardSummary />
        <div>card</div>
        <div>card</div>
      </div>
    </div>
  );
}
