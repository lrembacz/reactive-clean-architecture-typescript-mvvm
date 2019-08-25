import {Observable} from 'rxjs/index';
import ProductListItem from '../entity/ProductListItem';

interface ProductListRepositoryInterface {
    fetchProductList(): Observable<Array<ProductListItem>>
}

export default ProductListRepositoryInterface;