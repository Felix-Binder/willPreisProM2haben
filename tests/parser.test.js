import { describe, it, expect } from 'vitest';
import { parsePrice, parseArea } from '../src/utils/parser';

describe('parsePrice', () => {
    it('parst einfache Zahlen', () => {
        expect(parsePrice('€ 1.234')).toBe(1234);
    });

    it('parst Komma-Werte korrekt', () => {
        expect(parsePrice('€ 1.234,56')).toBe(1234.56);
    });

    it('exit on no input', () => {
        expect(parsePrice('')).toBe(null);
    });
});

describe('parseArea', () => {
    it('exit on no input', () => {
        expect(parsePrice('')).toBe(null);
    });

    it('parse m2', () => {
        expect(parseArea('50m²')).toBe(50);
    });
});
