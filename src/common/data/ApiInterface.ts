import {Observable} from 'rxjs/index';
import {Either} from '../functional/Either';

interface ApiOptions {
    headers?: any;
    params?: any;
}

interface ApiResponse<T> {
    data: T;
    status: number;
    statusText?: string;
}

interface ApiError<T = any> extends Error {
    data?: T;
    status: number;
    statusText?: string;
    isApiError: boolean;
}

interface ApiInterface {
    get<T>(url: string, options?: ApiOptions) : Observable<Either<ApiError, ApiResponse<T>>>;
}

export {ApiOptions, ApiInterface, ApiResponse, ApiError};