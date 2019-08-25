import {Observable, Observer, Subscription} from 'rxjs/index';

export default class UseCase<R = never, P = {}> {
    protected subscription: Subscription;

    public execute(observer: Observer<R>, params?: P) {
        this.subscription = this.createObservable(params)
            .subscribe(observer);
    }

    protected createObservable(params?: P): Observable<R> {
        return new Observable<never>();
    }

    public unsubscribe() {
        if (!this.subscription.closed) {
            this.subscription.unsubscribe();
        }
    }
}