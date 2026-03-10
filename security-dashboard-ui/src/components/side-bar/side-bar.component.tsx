import { NavLink, useNavigate } from 'react-router';
import { sidebarItems } from './side-bar.constants';
import { Button } from '../ui/button';

function SideBarComponent() {
    const navigate = useNavigate();
    return (
        <div className='bg-primary flex flex-col gap-6 h-full p-2'>
            <div className='text-white font-extrabold cursor-pointer' onClick={() => { navigate('/dashboard') }}>SELYEK</div>
            <div className='flex flex-col gap-8 justify-center items-center'>
                {sidebarItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink key={item.path} to={item.path}>
                            <Button className='flex flex-col gap-1 cursor-pointer' disabled={item.isDisabled}>
                                <Icon className='w-6! h-6!' />
                                <div className='text-xs'>{item.title}</div>
                            </Button>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    )
}

export default SideBarComponent;

