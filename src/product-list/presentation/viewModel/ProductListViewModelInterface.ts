import {Observable} from 'rxjs/index';
import ProductListItem from '../../domain/entity/ProductListItem';

interface ProductListViewModelInterface {
    getProductList(): Observable<Array<ProductListItem>>;

    onInit(): void;
    onDispose(): void;
}

export default ProductListViewModelInterface;