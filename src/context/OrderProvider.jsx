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

  // FILTER ORDERS
  const filteredData = useMemo(() => {
    return sheetData.filter((data) => {
      if (/^\d+$/.test(query)) {
        return Object.values(data).includes(Number(query));
      } else {
        return Object.values(data).includes(query);
      }
    });
  }, [sheetData, query]);

  // UPDARW order value
  function updateSheetData(value, id, index) {
    setSheetData((currentData) => {
      return currentData.map((data) => {
        // select clicked key value
        let selectedKey = Object.keys(currentData[id])[index];
        // if numbers save as number
        if (data.ID === currentData[id].ID && /^\d+$/.test(value)) {
          return { ...data, [selectedKey]: Number(value) };
          // else save as string
        } else if (data.ID === currentData[id].ID) {
          return { ...data, [selectedKey]: value.toUpperCase() };
        }
        return data;
      });
    });
  }

  // ADD order
  function addSheetData(newOrder) {
    setSheetData((currentData) => {
      return [...currentData, newOrder];
    });
  }

  return (
    <>
      <OrderContext.Provider
        value={{
          sheetData,
          setSheetData,
          query,
          setQuery,
          filteredData,
          updateSheetData,
          addSheetData,
        }}>
        {children}
      </OrderContext.Provider>
    </>
  );
}
