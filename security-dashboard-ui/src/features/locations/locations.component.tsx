import React, { createContext, useState } from 'react'
import LocationLeftBarComponent from './location-left-bar.component';
import LocationTopBarComponent from './location-top-bar.component';
import LocationContentComponent from './location-content.component';

interface LocationContext {
    activeLocation: string;
    setActiveLocation: React.Dispatch<React.SetStateAction<string>>
}

export const LocationContext = createContext<LocationContext | null>(null);

function LocationsComponent() {
    const [activeLocation, setActiveLocation] = useState('');
    return (
        <LocationContext.Provider value={{ activeLocation, setActiveLocation }}>
            <section className='flex w-full h-full'>
                <LocationLeftBarComponent />
                <section className='flex flex-col gap-4 w-[80%]'>
                    <LocationTopBarComponent />
                    <section className='p-4'>
                    <LocationContentComponent />
                    </section>
                </section>
            </section>
        </LocationContext.Provider>
    )
}

//Left bar
// Content topbar with tab switch
// table 
// Mainitain context to manage active location

export default LocationsComponent;