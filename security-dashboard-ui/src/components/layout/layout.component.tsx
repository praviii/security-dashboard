import SideBarComponent from '../side-bar/side-bar.component';
import TopBarComponent from '../top-bar/top-bar.component';
import { Outlet } from 'react-router';

function LayoutComponent() {
    return (
        <main className='flex w-full h-full'>
            <SideBarComponent />
            <section className='flex gap-4 flex-col w-full'>
            <TopBarComponent />
            <Outlet/>
            </section>
        </main>
    )
}

export default LayoutComponent;