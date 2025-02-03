export function updateSearchParams(
    currentParams: URLSearchParams,
    key: string,
    value: string | null
): string {
    const newParams = new URLSearchParams(currentParams.toString());

    if (value === null) {
        newParams.delete(key);
    } else {
        newParams.set(key, value);
    }

    return newParams.toString();
}