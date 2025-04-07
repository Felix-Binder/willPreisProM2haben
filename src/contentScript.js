import {
    extractAndInsertPricePerM2onListingsView,
    extractAndInsertPricePerM2onDetailView,
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

function isDetailView() {
    return window.location.pathname.includes('/d/');
}

function init() {
    if (isDetailView()) {
        extractAndInsertPricePerM2onDetailView();
    } else {
        startObservingListings();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
