import { createContext, ReactNode, useContext } from 'react';
import { WorldStore } from 'stores/world-store/world-store';

const StoreContext = createContext<WorldStore | undefined>(undefined);

export const RootStoreProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const worldStore = new WorldStore();
  return (
    <StoreContext.Provider value={worldStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = (): WorldStore => {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error('useStore must be used within RootStoreProvider');
  }

  return context;
};
