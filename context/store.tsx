
'use client';
import { iBlog } from '@/types';
import { createContext, useContext, Dispatch, useState, SetStateAction } from 'react'

interface ContextProps {
  data: iBlog[],
  setData: Dispatch<SetStateAction<iBlog[]>>
}

const GlobalContext = createContext<ContextProps>({
  data: [],
  setData: (): iBlog[] => []
})

export const GlobalContextProvider = ({ children }: any) => {
  const [data, setData] = useState<[] | iBlog[]>([])

  return (
    <GlobalContext.Provider value={{ data, setData }} >
      {children}
    </GlobalContext.Provider>
  )

}

export const useGlobalContext = () => useContext(GlobalContext);

