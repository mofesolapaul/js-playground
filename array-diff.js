// implement a difference function, which subtracts one list from another
// and returns the result. It should remove all values from list a, 
// which are present in list b keeping their order.

function intersect(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);

    const smallerSet = setA.size < setB.size ? setA : setB;
    const largerSet = setA.size > setB.size ? setA : setB;

    let intersection = new Set();
    for (const value of smallerSet) {
        if (largerSet.has(value)) {
            intersection.add(value);
        }
    }

    return intersection;
}

function arrayDiff(a, b) {
    if (!a.length) return [];
    if (!b.length) return a;

    const intersection = intersect(a, b);
    return a.filter(val => !intersection.has(val));
}
