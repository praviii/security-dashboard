import SearchComponent from "@/components/search-component";
import TableComponent from "@/components/table/table.component";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function LocationContentComponent() {
    const tableTitles = ['S.NO','LOCK NAME','ASSET MARKETING','LOCK TYPE','BATTERY PERCENTAGE','LASTCOMMUNICATED DATE & TIME','CREATED BY','ACT']
    return (
        <section className="bg-white rounded-md">
            <header className="flex justify-between items-center px-4 p-2">
                <div className="text-lg font-bold">Lock Mapping</div>
                <div className="flex items-center gap-2 justify-center">
                    <Button className="flex items-center justify-between bg-accent px-2 rounded-md cursor-pointer">
                        <Plus size={5} className="text-primary" />
                        <div className="whitespace-nowrap text-primary">
                            Lock mapping
                        </div>
                    </Button>
                    <SearchComponent />
                </div>
            </header>
            <section className="p-4 ">
                <TableComponent
                title={tableTitles}
                data={[]}
                />
            </section>
        </section>
    )
}

export default LocationContentComponent;