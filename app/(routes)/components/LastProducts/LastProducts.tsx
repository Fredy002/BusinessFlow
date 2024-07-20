import { CustomIcon } from "@/components/CustomIcon";
import { Building } from "lucide-react";

export function LastProducts() {
    return (
        <div className="shadow-sm bg-background rounded-lg p-5">
            <div className="flex gap-x-2 items-center">
                <CustomIcon icon={Building} />
                <p className="text-xl">
                    Last Products
                </p>
            </div>
            <div>
                <p>
                    No products added yet
                </p>
            </div>
        </div>
    )
}
