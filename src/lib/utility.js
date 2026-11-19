const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

export function sortVariant(unSorted) {
    const sorted = unSorted.sort((a, b) => sizes.indexOf(a) - sizes.indexOf(b))

    return sorted;
}

