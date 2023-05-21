import { ReactNode, createContext, useState } from "react";
import { Loading } from "../components/loading/loading";

export interface LoadingContextProps {
  loading: boolean;
  changeLoading: (isLoading: boolean) => void;
}

const defaultValues = {
  loading: false,
  changeLoading: (isLoading: boolean) => {
    return;
  },
};

export const LoadingContext = createContext<LoadingContextProps>(defaultValues);

export interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  function changeLoading(isLoading: boolean) {
    setLoading(isLoading);
  }

  console.log(loading);

  return (
    <LoadingContext.Provider value={{ loading, changeLoading }}>
      {loading ? <Loading /> : children}
    </LoadingContext.Provider>
  );
};
