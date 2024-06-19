import { PropsWithChildren } from 'react';

export interface IMenuContext {
  activeView: number;
  setActiveView: React.Dispatch<React.SetStateAction<number>>;
}

export interface IMenuContextProvider extends PropsWithChildren {}
