import { useEffect, useState } from "react";
import { bookStoreApi } from "../helpers/request";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const data = await bookStoreApi.get(url);

    setState({
      data: data.data.data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return state;
};
