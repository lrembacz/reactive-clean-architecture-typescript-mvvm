import {html, LitElement, TemplateResult} from 'lit-element';
import {container} from '../common/di';
import productListModule from './di/product-list-module';

class ProductListProvider extends LitElement {
    constructor() {
        super();
        container.load(productListModule);
        const element = window.isIE ? document.body : this;
        element.addEventListener('_inject_', this.inject, false);
    }

    connectedCallback() {
        super.connectedCallback();
    }

    inject(e: Event | CustomEvent) {
        if (container.get((e as CustomEvent).detail.key)) {
            (e as CustomEvent).detail.dependency = container.get((e as CustomEvent).detail.key);
            e.stopPropagation();
        }
    }

    protected render(): TemplateResult {
        return html`
            <slot></slot>
        `;
    }
}

export default ProductListProvider;