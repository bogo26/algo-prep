function twoStrings(s1, s2) {
    var chars = {};

    for (let i = 0; i < s1.length; i++) {
        chars[s1[i]] = true;
    }

    for (let i = 0; i < s2.length; i++) {
        if (chars[s2[i]]) {
            return 'YES';
        }
    }

    return 'NO';
}