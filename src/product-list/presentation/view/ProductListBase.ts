import {LitElement, html} from 'lit-element';
import {TemplateResult} from 'lit-html';
import ProductListItem from '../../domain/entity/ProductListItem';
import ProductListViewModelInterface from '../viewModel/ProductListViewModelInterface';
import subscriptions from '../../../common/presentation/subscriptions';

@subscriptions(function() {
    return {
        productList: this.productListViewModel.getProductList()
    }
})
class ProductListBase extends LitElement {
    public productListViewModel: ProductListViewModelInterface;
    protected productList: Array<ProductListItem> = [];

    connectedCallback() {
        super.connectedCallback();
        this.productListViewModel.onInit();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
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