function findingBadData(array) {
    if (Array.isArray(array)) {
        let bad_data = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                bad_data = bad_data + 1
            }
        }
        return bad_data

    } else {
        return "Please Input Array Data"
    }

}

let arr = [5,-1];
const output = findingBadData(arr);
console.log(output);


// const check_input = Array.isArray(array);
// console.log(check_input);
// if(check_input == 'false'){
//     return "Please Enter Valid Array Data";
// }
// else{

// }