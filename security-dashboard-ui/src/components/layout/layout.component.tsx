import FooterComponent from '../footer/footer.component';
import SideBarComponent from '../side-bar/side-bar.component';
import { Outlet } from 'react-router';

function LayoutComponent() {
    return (
        <main className='flex w-full h-full'>
            <SideBarComponent />
            <section className='flex flex-col w-full'>
                <article className='flex-1'>
                    <Outlet />
                </article>
                <FooterComponent />
            </section>
        </main>
    )
}

export default LayoutComponent;