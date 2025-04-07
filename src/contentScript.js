import {
    extractAndInsertPricePerM2onListingsView,
    extractAndInsertPricePerM2onSingleView,
} from './utils/extractor';

export function startObservingListings() {
    const observer = new MutationObserver(() => {
        debounceProcess();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    setInterval(() => {
        extractAndInsertPricePerM2onListingsView();
    }, 3000);

    extractAndInsertPricePerM2onListingsView();
}

let debounceTimeout;
function debounceProcess() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(extractAndInsertPricePerM2onListingsView, 500);
}

function isSingleView() {
    return window.location.pathname.includes('/d/');
}

window.addEventListener('load', () => {
    setTimeout(() => {
        if (isSingleView()) {
            extractAndInsertPricePerM2onSingleView();
        } else {
            startObservingListings();
        }
    }, 1000);
});
