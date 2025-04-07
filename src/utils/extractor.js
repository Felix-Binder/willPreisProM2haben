import { parsePrice, parseArea } from './parser';
import { calcPricePerM2 } from './calculation';

export function extractAndInsertPricePerM2onListingsView() {
    const listings = document.querySelectorAll(
        '[data-testid^="search-result-entry-header-"]:not([data-willpreisprom2haben-processed])',
    );

    listings.forEach((item) => {
        console.log(
            '[willPreisProM2haben] ⚙️ Extracting and calculating price per square meter...',
        );

        const priceElement = item.querySelector('[data-testid^="search-result-entry-price-"]');
        const attributeElements = item.querySelectorAll(
            '[data-testid^="search-result-entry-teaser-attributes"]',
        );

        const price = parsePrice(priceElement?.textContent.trim());
        let area = null;
        attributeElements.forEach((attr) => {
            const text = attr.textContent.trim();
            if (text.includes('m²')) {
                area = parseArea(text);
            }
        });

        console.debug('[willPreisProM2haben] 🐞 Extracted values:', price, area);

        const pricePerM2 = calcPricePerM2(price, area);

        if (price && area && pricePerM2 !== null) {
            const existing = item.querySelector('.m2-price-tag');
            if (!existing) {
                const badge = document.createElement('div');
                badge.textContent = `€ ${pricePerM2}/m²`;
                badge.className = 'willpreisprom2haben-badge-list-view';
                priceElement.parentElement.appendChild(badge);
                item.setAttribute('data-willpreisprom2haben-processed', 'true');
                console.log(
                    '[willPreisProM2haben] ✅ Created price per square meter Badge:',
                    pricePerM2,
                );
            }
        }
    });
}

export function extractAndInsertPricePerM2onDetailView() {
    console.log('[willPreisProM2haben] ⚙️ Extracting and calculating price per square meter...');

    const priceElement = document.querySelector(
        '[data-testid^="contact-box-price-box-price-value-"]',
    );
    const attributeElements = document.querySelectorAll('[data-testid^="attribute-group"]');

    const price = parsePrice(priceElement?.textContent.trim());
    let area = null;

    attributeElements.forEach((attr) => {
        const text = attr.textContent.trim();
        if (text.includes('m²')) {
            area = parseArea(text);
        }
    });

    console.debug('[willPreisProM2haben] 🐞 Extracted values:', price, area);

    const pricePerM2 = calcPricePerM2(price, area);

    if (price && area && pricePerM2 !== null) {
        const badge = document.createElement('div');
        badge.textContent = `€ ${pricePerM2}/m²`;
        badge.className = 'willpreisprom2haben-badge-detail-view';
        priceElement.parentElement.appendChild(badge);
        console.log('[willPreisProM2haben] ✅ Created price per square meter Badge:', pricePerM2);
    }
}
