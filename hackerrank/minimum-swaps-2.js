function minimumSwaps(arr) {
    var count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - 1 != i) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] == i + 1) {
                    // swap
                    count ++;
                    let aux = arr[i];
                    arr[i] = arr[j];
                    arr[j] = aux;
                }
            }
        }
    }

    return count;
}