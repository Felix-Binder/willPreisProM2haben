import { describe, beforeEach, it, expect } from 'vitest';
import { extractAndInsertPricePerM2onListingsView } from '../src/utils/extractor';

describe('extractAndInsertPricePerM2onSingleView', () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <div data-testid="search-result-entry-header-0">
        <div data-testid="search-result-entry-price-0">€ 200.000</div>
        <div data-testid="search-result-entry-teaser-attributes">
          <div>100m²</div>
          <div>4 Zimmer</div>
        </div>
      </div>
    `;
    });

    it('inserts correct €/m² badge', () => {
        extractAndInsertPricePerM2onListingsView();

        const badge = document.querySelector('.willpreisprom2haben-badge');
        expect(badge).toBeTruthy();
        expect(badge.textContent).toBe('€ 2000/m²');
    });

    it('does not insert badge if price is missing', () => {
        document.querySelector('[data-testid="search-result-entry-price-0"]').remove();
        extractAndInsertPricePerM2onListingsView();
        expect(document.querySelector('.willpreisprom2haben-badge')).toBeNull();
    });

    it('does not insert badge if area is invalid', () => {
        document.querySelector(
            '[data-testid="search-result-entry-teaser-attributes"]',
        ).textContent = 'NaN';
        extractAndInsertPricePerM2onListingsView();
        expect(document.querySelector('.willpreisprom2haben-badge')).toBeNull();
    });
});
