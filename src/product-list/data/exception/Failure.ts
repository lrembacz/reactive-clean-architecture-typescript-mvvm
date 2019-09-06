interface Failure {
    message: string;
    code: number;
}

class ServerError implements Failure {
    constructor(public code: number, public message: string) {}
}

export {Failure, ServerError};