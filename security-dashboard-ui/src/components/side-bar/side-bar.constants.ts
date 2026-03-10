import { KeyRound, LayoutDashboard, MapPinIcon, MonitorCog, RotateCcw, User, Van, type LucideIcon } from 'lucide-react';

interface SidebarItems {
    title: string;
    path: string;
    icon: LucideIcon;
    isDisabled?: boolean;
}

export const sidebarItems: SidebarItems[] = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'Location',
        path: '/location',
        icon: MapPinIcon
    },
     {
        title: 'Gateways',
        path: '/location',
        icon: MonitorCog,
        isDisabled :true,
    },
     {
        title: 'Trips',
        path: '/location',
        icon: Van,
        isDisabled:true
    },
     {
        title: 'Vechicles',
        path: '/location',
        icon: Van,
        isDisabled:true
    },
     {
        title: 'Users',
        path: '/location',
        icon: User,
        isDisabled:true
    },
     {
        title: 'Keys',
        path: '/location',
        icon: KeyRound,
        isDisabled:true
    },
    {
        title: 'Levels',
        path: '/location',
        icon: RotateCcw,
        isDisabled:true
    }
]