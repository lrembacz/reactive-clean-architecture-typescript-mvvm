import {Observable, Subscription} from 'rxjs/index';
import {LitElement} from 'lit-element';

type Constructor<T extends LitElement> = { new (...args: any[]): T };
interface SubscriptionsList { [s: string]: Observable<any>; }

export default function subscriptions( subscriptionsList: () => SubscriptionsList) {
    return function(baseElement: Constructor<any>) {
        return class extends baseElement {
            private subscription: Subscription;

            connectedCallback() {
                this.subscription = new Subscription();

                const subscriptionsBinded = subscriptionsList.bind(this);

                if (subscriptionsList) {
                    Object.keys(subscriptionsBinded()).forEach((key: string) => {
                        if (this.hasOwnProperty(key)) {
                            this.subscription.add(subscriptionsBinded()[key].subscribe((v => this[key] = v)));
                        } else {
                            throw Error(`property ${key} is not present in class`)
                        }
                    });
                }
                super.connectedCallback();
            }

            disconnectedCallback() {
                super.disconnectedCallback();
                this.subscription.unsubscribe();
            }
        } as any;
    }
}