import ProductListViewModelInterface from './ProductListViewModelInterface';
import FetchProductListUseCase from '../../domain/usecase/FetchProductListUseCase';
import ProductListItem from '../../domain/entity/ProductListItem';
import {BehaviorSubject, Observable} from 'rxjs/index';

export default class ProductListViewModel implements ProductListViewModelInterface {

    constructor(private fetchProductListUseCase: FetchProductListUseCase) {}

    private productsList: BehaviorSubject<Array<ProductListItem>>
        = new BehaviorSubject<Array<ProductListItem>>([]);

    onInit() {
        this.fetchProductListUseCase.execute(this.fetchObserver);
    }

    getProductList(): Observable<Array<ProductListItem>> {
        return this.productsList.asObservable();
    }

    onDispose() {
        this.fetchProductListUseCase.unsubscribe();
    }


    handleFetchSuccess(productList: Array<ProductListItem>) {
        this.productsList.next(productList);
    }

    handleFetchError(error: Error) {
        alert(error.message);
    }


    fetchObserver = new class {
        constructor(public parent: ProductListViewModel) {}
        next(productList: Array<ProductListItem>) {
            this.parent.handleFetchSuccess(productList);
        }
        error(error: Error) {
            this.parent.handleFetchError(error);
        }
        complete() {}
    }(this);
}