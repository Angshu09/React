import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useFilter(dataList, callBack) {
  const [query, setQuery] = useLocalStorage('query',"");

  const filteredData = dataList.filter((data) =>
    callBack(data).toLowerCase().includes(query)
  );

  return [filteredData, setQuery];
}
