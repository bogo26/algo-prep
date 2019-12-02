function checkMagazine(magazine, note) {
 
    for (let i = 0; i < note.length; i++) {
        const result = magazine.find((text, index) => {
            if (text == note[i]) {
                magazine[index] = '';
                return true;
            }
        });
        
        if (!result) {
            console.log('No');
            return;
        }
        
    }

    console.log('Yes');


    // works only with consecutive values

    // while (indexMag < magazine.length) {
    //     // console.log(note[indexNote], magazine[indexMag])
    //     if (magazine[indexMag] == note[indexNote]) {
    //         indexMag++;
    //         indexNote++;
    //     } else {
    //         indexMag++;
    //     }
    // }
    // 
    // if (indexNote >= note.length - 1) {
    //     console.log('Yes');
    // } else {
    //     console.log('No');
    // }
}