export const calcPricePerM2 = (price, area) => {
    if (typeof price !== 'number' || typeof area !== 'number' || area === 0) {
        return null;
    }

    return Math.round((price / area) * 100) / 100;
};
