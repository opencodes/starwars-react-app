import { useEffect, useState } from 'react';
import { HttpMethods } from '../interface/app.interface';
import { get, post } from '../service/http.service';

export const useFetch = (method: HttpMethods, url: string, payload?: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<any>(null);

  const httpGet = async (url: string) => {
    setLoading(true);
    const res = await get(url);
    if (res.success) {
      setData(res.data);
      setError('');
      setLoading(false);
    } else {
      setLoading(false);
      setError('Error loading category');
    }
  };

  const httpPost = async (url: string, payload?: any) => {
    setLoading(true);
    const res = await post(url, payload);
    if (res.success ) {
      setData(res.data);
      setError('');
      setLoading(false);
    } else {
      setLoading(false);
      setError('Error loading category');
    }
  };

  useEffect(() => {
    if (!loading) {
      if (method === HttpMethods.GET) {
        httpGet(url);
      }
      if (method === HttpMethods.POST && payload) {
        httpPost(url, payload);
      }
    }
  }, [url]);

  return { loading, error, data , retry: method === HttpMethods.GET ? httpGet : httpPost};
};
