import {inject} from 'inversify';
import {LitElement} from 'lit-element';

export type Constructor<T extends LitElement> = new (...args: any[]) => T;

function resolve<T extends Constructor<any>>(target: T) {
    return class extends target {

        constructor(...args: any[]) {
            super(...args);
            this.resolveDependencies();
        }

        resolveDependencies() {
            // Reflect.getOwnMetadataKeys(this.constructor)[0]
            const meta = Reflect.getOwnMetadata("inversify:tagged_props", target);

            Object.keys(meta).forEach((key) => {
                const event = new CustomEvent('_inject_', {
                    detail: {key: meta[key][0].value}, bubbles: true, cancelable: true, composed: true
                });
                const element = window.isIE ? document.body : this;
                element.dispatchEvent(event);
                this[key] = (event as CustomEvent).detail.dependency;
            });
        }
    };
}

function injectHelper(type: any, clss: any, prop: string) {
    inject(type)(clss.prototype, prop);
}

export { resolve, injectHelper };