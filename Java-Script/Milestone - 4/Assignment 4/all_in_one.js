//First Problem
//Function Start
function mindGame(num) {
    if (typeof num !== 'number' || num < 0) {
        return "Please Enter Positive Number";
    }
    let result = (((num * 3) + 10) / 2) - 5;
    return result;
}
//Function End
//This function will take a positive number.And Then it will multiply 3 with input number and after that  add 10 with the number. Next dive the number. And Lastly subtract 5 from the number. Return Number.

//For Check Function Optional

// const output = mindGame(5);
// console.log(output);
//-----------------------------------------------------------------------------------------------------

//Second Problem
//Function start
function evenOdd(text) {
    if (typeof text !== 'string') {
        return "Please input string Data";
    }
    const total_character = text.length;
    if (total_character % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }

}

//Function end
// This Function will take a string and count string character and return even and odd though character count is even and odd.

// For Function Checking Optional
// output = evenOdd("Phero")
// console.log(output);

//------------------------------------------------------------------------------------------------------------------------

//Third Problem
//Function Start
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
//Function End
//This function will take number as a input. After that it will subtract 7 from input number. Then it will compare with 7 and return our result.

// It is optional for function Check
// const output = isLGSeven('-15');
// console.log(output);
//---------------------------------------------------------------------------------------------------------------------

//Fourth Problem
//Function Start
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

//Function End
//This function take array input. And count bad data. Here bad data means negative data. And Return Total Bad Data.

//This is optional for function check
// let arr = 5;
// const output = findingBadData(arr);
// console.log(output);

//------------------------------------------------------------------------------------------------------------------

//Fifth Problem
//Function Start
function gemsToDiamond(input1, input2, input3) {

    if (typeof input1 === 'number' && input1 > 0 &&
        typeof input2 === 'number' && input2 > 0 &&
        typeof input3 === 'number' && input3 > 0) {
        const gem_1 = input1 * 21;
        const gem_2 = input2 * 32;
        const gem_3 = input3 * 43;

        const total = gem_1 + gem_2 + gem_3;
        if (total >= (1000 * 2)) {
            return total - 2000;
        } else {
            return total;
        }


    } else {
        return "Gems Will Be Positive Integer Number";
    }


}

//Function End
// This function will take 3 parameter. we Think 3 user gems number.After that it will multiply 3 different integer number with these 3 parameter after that it check with condition and return number.

//This is optional for checking number.
// const output = gemsToDiamond(100, 5, 1);
// console.log(output);