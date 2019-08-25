import ProductListProvider from './ProductListProvider';
import ProductListBase from './presentation/view/ProductListBase';
import {resolve} from '../common/di/decorator';
import './di';

customElements.define('product-list-provider', ProductListProvider);
customElements.define('product-list', resolve(ProductListBase));