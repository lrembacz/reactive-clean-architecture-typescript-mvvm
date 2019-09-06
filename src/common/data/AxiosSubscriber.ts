import { Subscriber } from "rxjs";
import {CancelTokenSource } from "axios";

class AxiosSubscriber extends Subscriber<any> {
    source: CancelTokenSource;
    constructor(observer: Subscriber<any>, source: CancelTokenSource) {
        super(observer);

        this.source = source;
    }

    unsubscribe() {
        this.source.cancel();
        super.unsubscribe();
    }
}

export {AxiosSubscriber};
