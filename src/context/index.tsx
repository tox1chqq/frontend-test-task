import React, {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Loader } from "../components";
import { defaultValues, jobsUrl } from "../constants";
import { TAppContext } from "../types";

export const AppContext = createContext<TAppContext | null>(null);

const handleFormatPhone = (value: string) => {
  const cleaned = value.replace(/\D/g, "");

  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{3})$/);
  if (match) {
    return `${match[1]}${match[2]} ${match[3]} ${match[4]}`;
  }
  return value;
};

export const AppContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [userInfo, setUserInfo] = useState(() => {
    const storageData = localStorage.getItem("userInfo");
    return storageData ? JSON.parse(storageData) : defaultValues;
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { target } = event;
      let value = target.value;

      if (target.name === "phone") {
        value = handleFormatPhone(value);
      }

      setUserInfo({ ...userInfo, [target.name]: value });
    },
    [userInfo],
  );

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(jobsUrl);
        if (!response.ok) {
          throw new Error(`Ошибка запроса! Статус: ${response.status}`);
        }
        const data = await response.json();
        setJobs(data);
      } catch (e) {
        console.error("Ошибка при запросе", e);
      }
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  const value = useMemo(
    () => ({
      userInfo,
      isOpenModal,
      setIsOpenModal,
      handleChange,
      jobs,
    }),
    [userInfo, handleChange, jobs, isOpenModal],
  );

  if (isLoading) return <Loader />;

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
