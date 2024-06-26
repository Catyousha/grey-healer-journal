import { useEffect, useState } from "react";

export default function useData<T>(url: string) {
  const [data, setData] = useState<T>();
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => response.json())
      .then((json: T) => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}
