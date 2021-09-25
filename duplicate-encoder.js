// The goal of this exercise is to convert a string to a new string where each 
// character in the new string is "(" if that character appears only once in 
// the original string, or ")" if that character appears more than once in the 
// original string. Ignore capitalization when determining if a character
// is a duplicate.

function replaceCharAt(input, index, char) {
    return input.substring(0, index) + char + input.substring(index + 1);
}

function duplicateEncode(word) {
    const lowercaseWord = word.toLowerCase();
    const firstOccurrences = new Map();
    let output = '';

    for (let i = 0; i < lowercaseWord.length; i++) {
        const char = lowercaseWord[i];
        if (!firstOccurrences.has(char)) {
            output += '(';
            firstOccurrences.set(char, i);
            continue;
        }

        output += ')';
        const position = firstOccurrences.get(char);

        if (null !== position) {
            // we have record of first occurrence that has not been flipped to ')'
            // so we flip it, and nullify that position in the map
            // cos we don't have to repeat the operation anymore
            output = replaceCharAt(output, position, ')');
            firstOccurrences.set(char, null);
        }
    }

    return output;
}
