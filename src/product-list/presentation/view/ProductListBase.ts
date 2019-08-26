import {html} from 'lit-element';
import {TemplateResult} from 'lit-html';
import ProductListItem from '../../domain/entity/ProductListItem';
import ProductListViewModelInterface from '../viewModel/ProductListViewModelInterface';
import subscriptions from '../../../common/presentation/subscriptions';
import OwnElement from '../../../common/presentation/OwnElement';

@subscriptions(function() {
    return {
        productList: this.productListViewModel.getProductList()
    }
})
class ProductListBase extends OwnElement {
    public productListViewModel: ProductListViewModelInterface;
    protected productList: Array<ProductListItem> = [];

    created() {
        super.created();
        this.productListViewModel.onInit();
    }

    beforeDestroy() {
        super.beforeDestroy();
        this.productListViewModel.onDispose();
    }

    protected render(): TemplateResult {
        return html`
            <div>Test</div>
            <ul>
                ${this.productList.map((item: ProductListItem) => {
                        return html`<li>${item.id}|${item.name}|${item.price}</li>`;
                })}
            </ul>
        `;
    }
}

export default ProductListBase;