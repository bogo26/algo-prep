function activityNotifications(expenditure, d) {
    var expInterval = [];
    var count = 0;
    var medianPos;
    var medianVal;

    var expIntervalLength;
    var numberToAdd;
    var numberToRemove;

    expInterval = expenditure.slice(0, d);
    expInterval.sort((a, b) => a - b);

    if (d % 2) {
        medianVal = expInterval[d / 2 - 0.5];
    } else {
        medianVal = (expInterval[d / 2] + expInterval[d / 2 + 1])/2;
    } 
    
    // console.log(expInterval, expenditure[d], medianVal);
    
    if (2 * medianVal <= expenditure[d]) {
        // console.log('inc');
        count++;
    }
    

    for (let i = d + 1; i < expenditure.length; i++)  {
        numberToAdd = expenditure[i - 1];
        numberToRemove = expenditure[i - d - 1];

        
        // console.log(numberToAdd, numberToRemove);

        if (!(numberToAdd >= medianVal && numberToRemove >= medianVal ||
            numberToAdd <= medianVal && numberToRemove <= medianVal)) {
            expInterval = expenditure.slice(i - d, i);
            expInterval.sort((a, b) => a - b);

            if (d % 2) {
                medianVal = expInterval[d / 2 - 0.5];
            } else {
                medianVal = (expInterval[d / 2] + expInterval[d / 2 + 1])/2;
            }
        } 
        
        // console.log(expInterval, expenditure[i], medianVal);
    
        if (2 * medianVal <= expenditure[i]) {
            // console.log('inc');
            count++;
        }
    }


    // not optimal
    // for (let i = 0; i < expenditure.length - d; i++)  {
    //     expInterval = expenditure.slice(i, i + d);
    //     expInterval.sort((a, b) => a - b);
    //     expIntervalLength = expInterval.length;

    //     if (expIntervalLength % 2) {
    //         median = expInterval[expIntervalLength / 2 + 0.5];
    //     } else {
    //         median = expInterval[expIntervalLength / 2] + expInterval[expIntervalLength / 2 + 1];
    //     }
        
    //     if (2 * median > expenditure[i + d + 1]) {
    //         count++;
    //     }
    // }

    return count;
}