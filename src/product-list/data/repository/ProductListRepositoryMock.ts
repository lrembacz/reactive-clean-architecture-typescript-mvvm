import ProductListRepositoryInterface from '../../domain/repository/ProductListRepositoryInterface';
import {Observable} from 'rxjs/index';
import ProductListItem from '../../domain/entity/ProductListItem';
import { injectable} from 'inversify';

@injectable()
export default class ProductListRepositoryMock implements ProductListRepositoryInterface {
    fetchProductList(): Observable<Array<ProductListItem>> {
        return new Observable((ob) => {
            ob.next([
                {
                    "id": 1,
                    "name": "Przykladowy produkt",
                    "description": "Przykladowy opis",
                    "price": 20
                },
                {
                    "id": 2,
                    "name": "Przykladowy produkt 2",
                    "description": "Przykladowy opis 2",
                    "price": 300
                },
                {
                    "id": 4,
                    "name": "Przykladowy produkt 4",
                    "description": "Przykladowy opis 4 ",
                    "price": 500
                },
                {
                    "id": 6,
                    "name": "Przykladowy produkt 6",
                    "description": "Przykladowy opis 6",
                    "price": 100
                }
            ].map(
                item => new ProductListItem(item.id, item.name, item.description, item.price)
            ));
            ob.complete();
        })
    }

}