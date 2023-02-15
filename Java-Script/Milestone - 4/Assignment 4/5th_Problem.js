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

const output = gemsToDiamond(20, 200, 50);
console.log(output);