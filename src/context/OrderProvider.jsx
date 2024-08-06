import { createContext, useEffect, useMemo, useState } from "react";

export const OrderContext = createContext(null);

// localstorage key
export const LOCAL_STORAGE_KEY = "ORDERLIST";
// fetch localstorage data
const storedOrderList = localStorage.getItem(LOCAL_STORAGE_KEY);

///////////////
// FUNCTION
//////////////
export function OrderProvider({ children }) {
  // search bar values
  const [query, setQuery] = useState("");

  // excel sheet data + save to local storage
  const [sheetData, setSheetData] = useState(
    JSON.parse(storedOrderList) || [],
    () => {
      return JSON.parse(storedOrderList);
    }
  );

  // update local storage
  useEffect(() => {
    if (sheetData.length !== 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sheetData));
    }
  }, [sheetData]);

  // search filter
  const filteredData = useMemo(() => {
    return sheetData.filter((data) => {
      // life filter? not sure if works correctly
      // if (query) {
      //   return Object.values(data).includes(Number(query))
      // }
      return (
        data["Order no"] === Number(query) ||
        data["IMO number"] === Number(query)
      );
    });
  }, [sheetData, query]);

  return (
    <>
      <OrderContext.Provider
        value={{
          sheetData,
          setSheetData,
          query,
          setQuery,
          filteredData,
        }}
      >
        {children}
      </OrderContext.Provider>
    </>
  );
}
