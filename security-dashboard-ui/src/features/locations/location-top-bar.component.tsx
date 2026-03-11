import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocationHook } from './hook/use-location.hook';

function LocationTopBarComponent() {
    const tabOptions = ['Lock Mapping', 'Lock Group', 'geofence', 'Gateway Mapping'];
    const { activeLocation } = useLocationHook();
    return (
        <section className='flex flex-col p-2 bg-white'>
            <div className='font-bold'>{activeLocation}</div>
            <Tabs defaultValue="Lock Mapping">
                <TabsList variant="line" className='p-0'>
                    {
                        tabOptions.map(tab => (
                            <TabsTrigger value={tab}>{tab}</TabsTrigger>
                        ))
                    }
                </TabsList>
            </Tabs>
        </section>
    )
}

export default LocationTopBarComponent;