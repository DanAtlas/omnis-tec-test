import React, { useState, createContext } from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

interface ContextState {
  serverId: number | null;
  setServerId: Dispatch<SetStateAction<number>>;
  customerId: string | null;
  setCustomerId: Dispatch<SetStateAction<string>>;
  serverName: string | null;
  setServerName: Dispatch<SetStateAction<string>>;
  serverType: string | null;
  setServerType: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext({} as ContextState);

const AppProvider = ({ children }: PropsWithChildren) => {
  const [serverId, setServerId] = useState(0);
  const [customerId, setCustomerId] = useState('');
  const [serverName, setServerName] = useState('');
  const [serverType, setServerType] = useState('');

  const state = {
    serverId,
    setServerId,
    customerId,
    setCustomerId,
    serverName,
    setServerName,
    serverType,
    setServerType
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
