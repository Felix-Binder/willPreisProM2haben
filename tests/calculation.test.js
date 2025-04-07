import { describe, it, expect } from 'vitest';
import { calcPricePerM2 } from '../src/utils/calculation';

describe('calcPricePerM2', () => {
    it('returns correct result for valid inputs', () => {
        expect(calcPricePerM2(100000, 50)).toBe(2000);
        expect(calcPricePerM2(123456, 78)).toBeCloseTo(1582.77, 2);
        expect(calcPricePerM2(0, 50)).toBe(0);
    });

    it('rounds to two decimal places', () => {
        expect(calcPricePerM2(99999, 33)).toBeCloseTo(3030.27, 2);
    });

    it('returns null if price is missing or falsy', () => {
        expect(calcPricePerM2(null, 50)).toBeNull();
        expect(calcPricePerM2(undefined, 50)).toBeNull();
        expect(calcPricePerM2('100000', 50)).toBeNull();
    });

    it('returns null if area is missing or falsy', () => {
        expect(calcPricePerM2(100000, null)).toBeNull();
        expect(calcPricePerM2(100000, undefined)).toBeNull();
        expect(calcPricePerM2(100000, 0)).toBeNull();
    });

    it('returns null if inputs are not numbers', () => {
        expect(calcPricePerM2('100000', 50)).toBeNull();
        expect(calcPricePerM2(100000, '50')).toBeNull();
        expect(calcPricePerM2('100000', '50')).toBeNull();
    });

    it('handles float inputs correctly', () => {
        expect(calcPricePerM2(99999.99, 33.3)).toBeCloseTo(3003, 0);
    });
});
