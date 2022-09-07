import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {TeamDetailsType} from '../types';

type IProps = {
  children: React.ReactNode;
};

type ContextType = {
  teamDetails: TeamDetailsType | undefined;
  setTeamDetails: Dispatch<SetStateAction<TeamDetailsType | undefined>>;
};

const Context = createContext({} as ContextType);

export const ApplicationContextProvider: React.FC<IProps> = ({children}) => {
  const [teamDetails, setTeamDetails] = useState<TeamDetailsType | undefined>();

  return (
    <Context.Provider value={{teamDetails, setTeamDetails}}>
      {children}
    </Context.Provider>
  );
};

export const useApplicationContext = () => useContext(Context);
