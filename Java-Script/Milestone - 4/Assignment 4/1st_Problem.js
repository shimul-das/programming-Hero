function mindGame(num) {
    if (typeof num !== 'number' || num < 0) {
        return "Please Enter Positive Number";
    }
    let result = (((num * 3) + 10) / 2) - 5;
    return result;
}
const output = mindGame(33);
console.log(output);