function cloneDeep<T extends Record<string, any>>(obj: T) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    const result = Array.isArray(obj) ? [] as T[] : {} as Record<string, any>;

    return Object.keys(obj).reduce((acc, current) => {
        acc[current] = cloneDeep(obj[current])
        return acc;
    }, result)
}

export default cloneDeep;
