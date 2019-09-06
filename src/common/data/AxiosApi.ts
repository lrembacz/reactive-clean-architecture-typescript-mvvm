import {ApiInterface, ApiOptions, ApiResponse, ApiError} from './ApiInterface';
import {Observable} from 'rxjs/index';
import axios, {AxiosError, AxiosResponse, CancelTokenSource} from 'axios';
import {Either} from '../functional/Either';
import {AxiosSubscriber} from './AxiosSubscriber';

export default class AxiosApi implements ApiInterface {
    get <T>(url: string, options?: ApiOptions): Observable<Either<ApiError, ApiResponse<T>>> {
        return new Observable<Either<ApiError, ApiResponse<T>>>( (observer) => {
            const headers = options ? options.headers : {};
            const params = options ? options.params : {};
            const source: CancelTokenSource = axios.CancelToken.source();

            axios.get<T>(url, {
                headers: headers,
                params: params,
                cancelToken: source.token,
            }).then((response: AxiosResponse) => {
                observer.next(Either.Right({
                    data: response.data,
                    status: response.status,
                    statusText: response.statusText
                }));
            }).catch((error: AxiosError) => {
                observer.next(Either.Left({
                    name: error.isAxiosError ? 'ApiError' : 'Error',
                    message: error.message,
                    data: error.response.data || undefined,
                    status: error.response.status || undefined,
                    isApiError: error.isAxiosError ? true : false
                }));
            });

            return new AxiosSubscriber(observer, source);
        });

    }


}


// public get<T, E = {}>(url: string, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
//     return new Observable<AxiosResponse<T>>( (subscriber) => {
//         axios.get<T>(url, options)
//             .then( (response: AxiosResponse<T>) => {
//                 subscriber.next(response);
//                 subscriber.complete();
//             })
//             .catch((error: AxiosError<E>) => {
//                 subscriber.error(error);
//             });
//     });
// }