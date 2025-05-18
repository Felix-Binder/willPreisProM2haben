export function parsePrice(text) {
    if (typeof text !== 'string') return null;

    text = text.trim();

    const cleaned = text
        .replace(/[^\d.,]/g, '')
        .replace(/\./g, '')
        .replace(',', '.');

    const price = parseFloat(cleaned);
    return Number.isFinite(price) ? price : null;
}

export function parseArea(text) {
    if (typeof text !== 'string') return null;

    text = text.trim().toLowerCase();

    const match = text.replace(',', '.').match(/(\d+(\.\d+)?)\s?m²/);
    if (match) {
        return parseFloat(match[1]);
    }

    const fallbackMatch = text.match(/(\d+)/);
    if (fallbackMatch) {
        return parseFloat(fallbackMatch[1]);
    }

    return null;
}
