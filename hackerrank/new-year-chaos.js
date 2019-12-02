function minimumBribes(q) {
    var count = 0;
    for (let i = 0; i < q.length; i++) {
        
        if (q[i] - 3 > i) {
            console.log('Too chaotic');
            return;
        }

        for (let j = q[i] - 2; j < i; j++) {
            if (q[j] > q[i]) {
                count++;
            }
        }
    
    }

    console.log(count);
}