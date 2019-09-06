import ProductListRepositoryInterface from '../../domain/repository/ProductListRepositoryInterface';
import {Observable} from 'rxjs/index';
import ProductListItem from '../../domain/entity/ProductListItem';
import ProductListService from '../service/ProductListService';
import {map} from 'rxjs/internal/operators';
import ProductEntity from '../entity/ProductEntity';
import {Failure, ServerError} from '../exception/Failure';
import {ApiError, ApiResponse} from '../../../common/data/ApiInterface';
import {Either} from '../../../common/functional/Either';

export default class ProductListRepository implements ProductListRepositoryInterface {
    constructor(protected productListService: ProductListService) {}

    fetchProductList(): Observable<Either<Failure, ProductListItem[]>> {
        return this.productListService.get<ProductEntity[]>('/api/products')
            .pipe(
                map(
                    (result: Either<ApiError, ApiResponse<ProductListItem[]>>) => result.either(
                        (left: ApiError) => new ServerError(left.status, left.message),
                        (right: ApiResponse<ProductEntity[]>) => right.data.map(
                            item => new ProductListItem(item.id, item.name, item.description, item.price)
                        )
                    )
                )
            );
    }
}