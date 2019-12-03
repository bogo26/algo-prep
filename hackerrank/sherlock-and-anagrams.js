function sherlockAndAnagrams(s) {
    var count = 0;

    for (let i = 0; i < s.length; i++) {
        let pair = {};

        for (let j = 0; j + i <= s.length; j++) {
            let substr = s.substr(j, i);
            if (substr) {
                substr = substr.split('').sort().join('');
                if (pair[substr]) {
                    count += pair[substr];
                    pair[substr]++;
                } else {
                    pair[substr] = 1;
                }
            }
        }
    }

    return count;
}