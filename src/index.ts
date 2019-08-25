declare global {
    interface Window {
        chunks_path: string;
        isIE: boolean;
    }
    interface Document {
        documentMode: any;
    }
}
// Workaround for IE
// In some cases there is need to use this function to check if is IE
window.isIE = /*@cc_on!@*/false || !!document.documentMode;

__webpack_public_path__ = window.chunks_path;

import './product-list';