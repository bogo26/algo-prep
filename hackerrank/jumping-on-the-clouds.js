function jumpingOnClouds(c) {
    let count = c.length - 1;
    let i = 0;
    
    while (i < c.length) {
        if (c[i+2] == 0) {
            count--;
            i = i + 2;
        } else {
            i++;
        }
    }

    return count;
}