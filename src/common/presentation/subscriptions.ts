import {Observable, Subscription} from 'rxjs/index';
import OwnElement from './OwnElement';

type Constructor<T extends OwnElement> = { new (...args: any[]): T };
interface SubscriptionsList { [s: string]: Observable<any>; }

export default function subscriptions( subscriptionsList: () => SubscriptionsList) {
    return function(baseElement: Constructor<any>) {
        return class extends baseElement {
            private subscription: Subscription;

            created() {
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
                super.created();
            }

            beforeDestroy() {
                super.beforeDestroy();
                this.subscription.unsubscribe();
            }
        } as any;
    }
}