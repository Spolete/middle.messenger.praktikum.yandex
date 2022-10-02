type Indexed<T = unknown> = {
    [key in string]: T;
};

export default function merge(lhs: Indexed<any>, rhs: Indexed<any>): Indexed {
    const keys = Object.keys(rhs);
    keys.forEach(key => {
        try {
            if (typeof rhs[key] !== 'object') {
                lhs[key] = rhs[key]
            } else {
                merge(lhs[key], rhs[key]);
            }
        } catch (e) {
            lhs[key] = rhs[key];
        }
    })
    return lhs
}
