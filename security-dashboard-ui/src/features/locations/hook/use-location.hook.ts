import { useContext } from 'react'
import { LocationContext } from '../locations.component';

export const useLocationHook = () => {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error("useLocation must be used within LocationProvider");
  }

  return context;
};