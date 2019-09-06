import ProductListRepositoryInterface from '../repository/ProductListRepositoryInterface';
import {Observable} from 'rxjs/index';
import ProductListItem from '../entity/ProductListItem';
import UseCase from '../../../common/domain/UseCase';
import {Failure} from '../../data/exception/Failure';
import {Either} from '../../../common/functional/Either';

export default class FetchProductListUseCase extends UseCase<Either<Failure, ProductListItem[]>> {
    constructor(private productListRepository: ProductListRepositoryInterface) {
        super();
    }

    protected createObservable(): Observable<Either<Failure, ProductListItem[]>> {
        return this.productListRepository.fetchProductList();
    }
}