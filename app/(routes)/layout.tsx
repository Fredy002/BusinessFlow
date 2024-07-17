export default function layoutDashboard({ children }: { children: React.ReactElement }) {
    return (
        <div className="flex w-full h-full">
            <div className="hidden xl:block w-80 h-full xl:fixed">
                sidebar
            </div>
            <div className="w-full xl:ml-80">
                <p>navbar</p>
                <div className="p-6 bg-[#fafbfc] dark:bg-secondary">
                    {children}
                </div>
            </div>
        </div>
    )
}
