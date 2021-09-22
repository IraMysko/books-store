import { useState } from "react";
import { getWeather } from "./getWeather";

const useNews = () => {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState({});

  const handleSearch = async (event: any) => {
    if (event.key === "Enter") {
      const data = await getWeather(query);
      setWeather(data);
      setQuery("");
    }
  };
  return { weather, handleSearch, query, setQuery };
};

export default useNews;
