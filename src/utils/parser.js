export function parsePrice(text) {
    if (!text) return null;

    const cleaned = text
        .replace(/[^\d.,]/g, '')
        .replace(/\./g, '')
        .replace(',', '.');

    return parseFloat(cleaned);
}

export function parseArea(text) {
    if (!text) return null;

    const match = text.replace(',', '.').match(/(\d+(\.\d+)?)\s?m²/);
    if (match) return parseFloat(match[1]);

    const fallbackMatch = text.match(/(\d+)/);
    return fallbackMatch ? parseFloat(fallbackMatch[1]) : null;
}
