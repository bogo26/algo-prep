function arrayManipulation(n, queries) {
    var max = 0;
    var arr = Array(n + 1).fill(0);
    
    for (let i = 0; i < queries.length; i++) {
        for (let j = queries[i][0]; j <= queries[i][1]; j++) {
            arr[j] += queries[i][2];
        }
    }

    for (let k = 1; k < arr.length; k++) {
        max = Math.max(max, arr[k]);
    }

    return max;
}