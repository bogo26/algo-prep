function maximumToys(prices, k) {
    var sum = 0;
    var count = 0;

    function compareNumbers(a, b) {
        return a - b;
    }

    prices.sort(compareNumbers);

    var i = 0;
    while(sum < k) {
        sum += prices[i];
        i++;
    }

    return i - 1;
}