import React from "react";

export default function LayoutAuth({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center h-screen items-center">
            <p>
                Business Flow
            </p>
            <h1 className="text-3xl my-2">
                Welcome to Business Flow
            </h1>
            <h2 className="text-2xl mb-3">
                Business Flow
            </h2>
            {children}
        </div>
    );
}