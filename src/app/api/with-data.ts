import { AxiosResponse } from "axios";

/** Extracts data property from an AxiosResponse<TData>. */
export async function withData<TData>(thenable: Promise<AxiosResponse<TData>>) {
  const response = await thenable;
  return response.data;
}
