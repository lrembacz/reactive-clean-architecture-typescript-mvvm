class Either<L, R> {
    private constructor(private left?: L, private right?: R) {}

    static Left<L>(val: L)  {
        return new Either<L, any>(val, null);
    };

    static Right<R>(val: R)  {
        return new Either<any, R>(null, val);
    };

    get isLeft(): boolean {
        return this.left !== null;
    }

    get isRight(): boolean {
        return this.right !== null;
    }

    public either( fnL: (_: L) => any, fnR: (_: R) => any): any {
        if(this.isLeft) {
            return fnL(this.left as L);
        }
        if(this.isRight) {
            return fnR(this.right as R);
        }
    }
}

export {Either};