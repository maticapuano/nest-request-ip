import { HttpErrorHandle } from "@/types/http";
import axios from "axios";

export class HttpService {
  public static async get<T>(
    url: string,
    errorHandle?: HttpErrorHandle<T>,
  ): Promise<T> {
    return axios
      .get(url)
      .then(res => res.data)
      .catch(errorHandle);
  }
}
