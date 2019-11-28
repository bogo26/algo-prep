function repeatedString(s, n) {
    let count = 0;
    let len = s.length;

    let inString = (s.match(/a/g) || []).length;
    let rest = n%len;

    count = Math.floor(n/len) * inString;

    for (let i = 0; i < rest; i++) {
        if (s[i] == 'a') {
            count++;
        }
    }

    return count;
}