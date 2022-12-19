import React, { createContext, useState, useEffect } from "react";

type ContextProps = {
  animeList: any[];
  data: any[];
};

const AppContext = createContext<Partial<ContextProps>>({});

const AppProvider = ({ children }: any) => {
  const [animeList, setAnimeList] = useState([]);
  const [yearRange, setYearRange] = useState<string[]>([]);
  const [data, setData] = useState<any[]>([]);

  const fetchAPI = async () => {
    const data = await fetch("https://api.jikan.moe/v4/top/anime");
    const json = await data.json();
    setAnimeList(json.data.slice(0, 19));
  };

  const getData = () => {
    if (animeList) {
      const years = animeList
        ?.map((anime: any) => {
          return anime.year;
        })
        .filter((item) => {
          return item !== null;
        })
        .sort();
      let uniqueYears: any = new Set(years);
      setYearRange([...uniqueYears]);

      // creating data
      const data: any = yearRange.map((year) => {
        const dataObj: {
          year: string | number;
          anime: string[];
          counter: number;
        } = {
          year,
          anime: [],
          counter: 0,
        };

        animeList?.map((anime: any) => {
          if (anime?.year == dataObj?.year) {
            dataObj.anime.push(anime?.title);
            dataObj.counter++;
          }
        });
        return dataObj;
      });
      setData(data);
    }
  };

  useEffect(() => {
    getData();
  }, [animeList]);

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <AppContext.Provider value={{ animeList, data }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
