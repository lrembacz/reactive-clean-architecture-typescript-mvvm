import ProductListRepositoryInterface from '../../domain/repository/ProductListRepositoryInterface';
import {Observable} from 'rxjs/index';
import ProductListItem from '../../domain/entity/ProductListItem';
import ProductListService from '../service/ProductListService';
import {map} from 'rxjs/internal/operators';
import {AxiosResponse} from 'axios';
import ProductEntity from '../entity/ProductEntity';

export default class ProductListRepository implements ProductListRepositoryInterface {
    constructor(protected productListService: ProductListService) {}

    fetchProductList(): Observable<Array<ProductListItem>> {
        return this.productListService.get<Array<ProductEntity>>('/api/products')
            .pipe(
                map(
                    (result: AxiosResponse<Array<ProductEntity>>) => result.data.map(
                        item => new ProductListItem(item.id, item.name, item.description, item.price)
                    )
                )
            );
    }

}