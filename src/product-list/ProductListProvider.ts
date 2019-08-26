import {html, TemplateResult} from 'lit-element';
import {container} from '../common/di';
import productListModule from './di/product-list-module';
import OwnElement from '../common/presentation/OwnElement';

class ProductListProvider extends OwnElement {
    constructor() {
        super();
        container.load(productListModule);
        const element = this;
        element.addEventListener('_inject_', this.inject, false);
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