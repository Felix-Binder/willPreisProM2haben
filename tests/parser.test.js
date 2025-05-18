import { describe, it, expect } from 'vitest';
import { parsePrice, parseArea } from '../src/utils/parser';

describe('parsePrice', () => {
    it('parst einfache Zahlen', () => {
        expect(parsePrice('€ 1234')).toBe(1234);
        expect(parsePrice('€ 1.234')).toBe(1234);
    });

    it('parst Komma-Werte korrekt', () => {
        expect(parsePrice('€ 1234,56')).toBe(1234.56);
        expect(parsePrice('€ 1.234,56')).toBe(1234.56);
    });

    it('ungültige Eingaben', () => {
        expect(parsePrice('abc')).toBeNull();
        expect(parsePrice('')).toBeNull();
        expect(parsePrice(null)).toBeNull();
        expect(parsePrice(undefined)).toBeNull();
    });
});

describe('parseArea', () => {
    it('unit parsing', () => {
        expect(parseArea('50m²')).toBe(50);
        expect(parseArea('75,5m²')).toBe(75.5);
    });

    it('fallback parsing', () => {
        expect(parseArea('etwa 120 Quadratmeter')).toBe(120);
        expect(parseArea('ca. 99')).toBe(99);
    });

    it('ungültige Eingaben', () => {
        expect(parseArea('abc')).toBeNull();
        expect(parseArea('')).toBeNull();
        expect(parseArea(null)).toBeNull();
        expect(parseArea(undefined)).toBeNull();
    });
});
