import { AxiosResponse } from "axios";

/** Extracts data property from an AxiosResponse<TData>. */
export function withData<TData>(thenable: Promise<AxiosResponse<TData>>) {
  return thenable.then((response: AxiosResponse<TData>) => {
    return response.data;
  });
}
