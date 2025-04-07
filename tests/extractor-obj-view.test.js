import { describe, beforeEach, it, expect } from 'vitest';
import {
    extractAndInsertPricePerM2onListingsView,
    extractAndInsertPricePerM2onSingleView,
} from '../src/utils/extractor';

describe('extractAndInsertPricePerM2onSingleView', () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <div data-testid="contact-box-price-box-price-value-0">€ 200.000</div>
      <div data-testid="attribute-group">
        <div>100m²</div>
        <div>4 Zimmer</div>
      </div>
    `;
    });

    it('inserts correct €/m² badge', () => {
        extractAndInsertPricePerM2onSingleView();

        const badge = document.querySelector('.willpreisprom2haben-badge');
        expect(badge).toBeTruthy();
        expect(badge.textContent).toBe('€ 2000/m²');
    });

    it('does not insert badge if price is missing', () => {
        document.querySelector('[data-testid="contact-box-price-box-price-value-0"]').remove();
        extractAndInsertPricePerM2onSingleView();
        expect(document.querySelector('.willpreisprom2haben-badge')).toBeNull();
    });

    it('does not insert badge if area is invalid', () => {
        document.querySelector('[data-testid="attribute-group"]').textContent = 'NaN';
        extractAndInsertPricePerM2onSingleView();
        expect(document.querySelector('.willpreisprom2haben-badge')).toBeNull();
    });
});
