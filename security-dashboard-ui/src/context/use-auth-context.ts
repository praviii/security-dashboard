import { createContext, useState } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    activePageTitle: string;
    setActivePageTitle: React.Dispatch<React.SetStateAction<string>>
}

export const authContext = createContext<AuthContextType | null>(null);

export default function useAuthContext() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activePageTitle, setActivePageTitle] = useState('Dashboard');

    return {
        isLoggedIn,
        setIsLoggedIn,
        activePageTitle,
        setActivePageTitle
    }
}
