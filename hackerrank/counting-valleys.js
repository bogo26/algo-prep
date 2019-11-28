function countingValleys(n, s) {
    let count = 0;
    let level = 0;
    for (var i = 0; i < n; i++) {
        let posLvl = level >= 0;
        if (s[i] == 'D') {
            level = level - 1;
        } else {
            level = level + 1;
        }

        if (posLvl && level < 0) {
            count++;
        }
    }

    return count;
}