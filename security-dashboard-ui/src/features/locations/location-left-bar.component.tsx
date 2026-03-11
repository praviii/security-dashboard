import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useLocationHook } from "./hook/use-location.hook";
import { useEffect } from "react";

interface Location {
    name: string;
    district: string;
}

function LocationLeftBarComponent() {
    const { activeLocation,setActiveLocation } = useLocationHook();
    const locations: Location[] = [
        {
            name: 'RS puram',
            district: 'Coimbatore'
        },
        {
            name: 'Madivaakam',
            district: 'Chennai'
        }
    ]

    useEffect(() => {
        if(!activeLocation && locations[0]){
            setActiveLocation(locations[0].name);
        }
    }, [])
    


    const changeLocation = ( val  : string) =>{
        setActiveLocation(val);
    }

    return (
        <section className="w-[20%] bg-white flex flex-col">
            <article className="flex justify-between p-4">
                Locations
                <Button className="rounded-2xl bg-accent h-6.25 w-6.25">
                    <Plus size={5} className="text-primary" />
                </Button>
            </article>
            <div className="p-4">
                <Input id="input-button-group" placeholder="Type to search..." />
            </div>
            <section className="flex flex-col gap-2">
                {
                    locations.map(location => (
                        <section className="bg-accent flex items-center gap-2 p-2 cursor-pointer" 
                        style={{ borderRight: activeLocation === location.name ? `3px solid var(--primary)` : `none`}}
                        onClick={() => changeLocation(location.name)}
                        >
                            <div className="bg-violet-300 rounded-full w-11.25 h-11.25 flex items-center justify-center">{location.name.charAt(0)}</div>
                            <div className="flex flex-col ">
                                <article className="text-primary font-bold text-sm">{location.name}</article>
                                <article className="text-gray-500 text-xs">{location.district}</article>
                            </div>
                        </section>
                    ))
                }
            </section>
        </section>
    )
}

export default LocationLeftBarComponent;