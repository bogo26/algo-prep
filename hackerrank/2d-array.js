function hourglassSum(arr) {
    let result;
    
    let height = arr.length;
    let width = arr[0].length;

    for (let i = 0; i < height - 2; i++) {
        for (let j = 0; j < width - 2; j++) {
            console.log(arr[i][j]);
            
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            sum += arr[i+1][j+1];
            sum += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]

            if (result == undefined) {
                result = sum;
            }

            if (sum > result) {
                result = sum;
            }
        }
    }

    return result;
}