import {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Observable} from 'rxjs/index';
import axios from 'axios';

export default class MockService {
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