import {
    extractAndInsertPricePerM2onListingsView,
    extractAndInsertPricePerM2onSingleView,
} from './utils/extractor';

window.addEventListener('load', () => {
    if (window.location.pathname.includes('-angebote')) {
        setTimeout(extractAndInsertPricePerM2onListingsView, 1000);
    } else {
        setTimeout(extractAndInsertPricePerM2onSingleView, 1000);
    }
});
