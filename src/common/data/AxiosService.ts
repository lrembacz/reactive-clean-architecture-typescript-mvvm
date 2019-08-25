import {Observable} from 'rxjs/index';
import {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import axios from 'axios';

export default class AxiosService {
    public get<T, E = {}>(url: string, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return new Observable<AxiosResponse<T>>( (subscriber) => {
            axios.get<T>(url, options)
                .then( (response: AxiosResponse<T>) => {
                    subscriber.next(response);
                    subscriber.complete();
                })
                .catch((error: AxiosError<E>) => {
                    subscriber.error(error);
                });
        });
    }

}