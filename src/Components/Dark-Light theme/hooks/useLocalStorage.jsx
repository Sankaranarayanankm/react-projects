import { useEffect, useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      let storedValue = localStorage.getItem(key);
      let parsedStoredValue = JSON.parse(storedValue);
      if (storedValue) return parsedStoredValue;
      else return defaultValue;
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default useLocalStorage;
