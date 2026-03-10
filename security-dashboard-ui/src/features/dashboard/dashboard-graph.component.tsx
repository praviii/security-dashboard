import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function DashboardGraphComponent({ data, title }: { title: string, data: number[] }) {
    return (
        <Card className="flex flex-col gap-4 min-h-80 flex-1 p-4">
            <CardHeader>
                <CardTitle className="text-center text-xs font-semibold uppercase">
                    {title}
                </CardTitle>
            </CardHeader>
            <hr />
            <div className="flex flex-col h-full items-center justify-center">
                {
                    data.length <= 0 &&
                    <>No Data</>
                }
            </div>
        </Card>
    )
}

export default DashboardGraphComponent;