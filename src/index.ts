declare global {
    interface Window {
        chunks_path: string;
        isIE: boolean;
    }
    interface Document {
        documentMode: any;
    }
}

__webpack_public_path__ = window.chunks_path;

import './product-list';