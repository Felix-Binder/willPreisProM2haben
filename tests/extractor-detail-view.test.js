import { describe, beforeEach, it, expect } from 'vitest';
import { extractAndInsertPricePerM2onDetailView } from '../src/utils/extractor';

describe('extractAndInsertPricePerM2onDetailView', () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <div data-testid="contact-box-price-box-price-value-0">€ € 107.999,56</div>
      <div data-testid="attribute-group">
        <div>72m²</div>
        <div>3 Zimmer</div>
      </div>
    `;
    });

    it('inserts correct €/m² badge', () => {
        extractAndInsertPricePerM2onDetailView();

        const badge = document.querySelector('.willpreisprom2haben-badge-detail-view');
        expect(badge).toBeTruthy();
        expect(badge.textContent).toBe('€ 1499.99/m²');
    });

    it('does not insert badge if price is missing', () => {
        document.querySelector('[data-testid="contact-box-price-box-price-value-0"]').remove();
        extractAndInsertPricePerM2onDetailView();
        expect(document.querySelector('.willpreisprom2haben-badge-detail-view')).toBeNull();
    });

    it('does not insert badge if area is invalid', () => {
        document.querySelector('[data-testid="attribute-group"]').textContent = 'NaN';
        extractAndInsertPricePerM2onDetailView();
        expect(document.querySelector('.willpreisprom2haben-badge-detail-view')).toBeNull();
    });
});
