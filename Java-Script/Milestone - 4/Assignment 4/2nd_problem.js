function evenOdd(text) {
    //console.log(typeof string);
    if (typeof text !== 'string') {
        return "Please input string Data";
    }
    const total_character = text.length;
    if (total_character % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
    //return total_character;

}

output = evenOdd("Batch7 ")
console.log(output);