import {LitElement, PropertyValues} from 'lit-element';

// Element wrapper to handle new lifecycles
// Fix to issues in IE with Events
export default class OwnElement extends LitElement {
    _firstRender: boolean = false;

    update(changedProperties: PropertyValues) {
        if (!this._firstRender) {
            this.beforeCreated();
            this._firstRender = true;
            this.created();
        }
        super.update(changedProperties);
    }

    created() {}

    beforeCreated() {}

    beforeDestroy() {}

    disconnectedCallback() {
        this.beforeDestroy();
        super.disconnectedCallback();
    }
}