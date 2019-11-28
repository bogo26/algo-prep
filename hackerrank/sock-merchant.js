function sockMerchant(n, ar) {
    let pairs = {};
    let count = 0;

    for (var i = 0; i < n; i++) {
        pairs[ar[i]] = pairs[ar[i]] ? 2 : 1;
        
        if (pairs[ar[i]] == 2) {
            count++;
            pairs[ar[i]] = 0;
        }
    
    }

    return count;
}