function isLGSeven(number) {

    if (typeof number !== 'number') {
        return "Please Enter  Number";
    }

    const result = number - 7;
    if (result < 7) {
        return result;
    } else {
        return number * 2
    }

}

const output = isLGSeven('-15');
console.log(output);