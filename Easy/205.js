/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 function hasDuplicateValues(dictionary) {
    const seenValues = new Set();
    for (const key in dictionary) {
        const value = dictionary[key];
        if (seenValues.has(value)) {
            return true; // Found two keys with the same value
        }
        seenValues.add(value);
    }
    return false; // No two keys have the same value
}

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    
    const dict = {};
    const seenValues = new Set();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (dict[charS]) {
            if (dict[charS] !== charT) {
                return false; // Mapping conflict
            }
        } else {
            if (seenValues.has(charT)) {
                return false; // Two characters in s map to the same character in t
            }
            dict[charS] = charT;
            seenValues.add(charT);
        }
    }

    return true;
};