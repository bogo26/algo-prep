function rotLeft(a, d) {
    let arr = a;

    return arr.splice(d).concat(arr);

}