import {Observable} from 'rxjs/index';
import ProductListItem from '../entity/ProductListItem';
import {Failure} from '../../data/exception/Failure';
import {Either} from '../../../common/functional/Either';

interface ProductListRepositoryInterface {
    fetchProductList(): Observable<Either<Failure, ProductListItem[]>>
}

export default ProductListRepositoryInterface;