function reverse_String(text){
    let reversed='';
    for(let i =text.length-1;i>=0;i--){
        const element=text[i];
        reversed = reversed+element
        console.log(element, reversed)
    }
    return reversed;
}

const mystring = " I am Shimul Chandra Das";
const reversed = reverse_String(mystring);
console.log('Reversed output: ', reversed)