import ProductListRepositoryInterface from '../repository/ProductListRepositoryInterface';
import {Observable} from 'rxjs/index';
import ProductListItem from '../entity/ProductListItem';
import UseCase from '../../../common/domain/UseCase';

export default class FetchProductListUseCase extends UseCase<Array<ProductListItem>> {
    constructor(private productListRepository: ProductListRepositoryInterface) {
        super();
    }

    protected createObservable(): Observable<Array<ProductListItem>> {
        return this.productListRepository
            .fetchProductList();
    }
}