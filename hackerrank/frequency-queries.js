var arr = [];
var counter = [];

for (let i = 0; i < queries.length; i++) {
    let op = queries[i][0];
    let val = queries[i][1];

    if (op == 1) {
        arr.push(val);
        if (counter[val] == undefined) {
            counter[val] == 1;
        } else {
            counter[val]++;
        }
    }

    if (op == 2) {
        const index = arr.find(el => el == val);
        delete arr[index];
        if (counter[val] == undefined) {
            counter[val] == 0;
        } else {
            counter[val]--;
        }
    }

    if (op == 3) {
        let found = counter.find(el => el == val);

        if (found == -1) {
            console.log(0);
        } else {
            console.log(1);
        }
    }
}