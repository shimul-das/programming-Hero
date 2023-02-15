

function removeDuplicate(names){
    const unique = [];
    for(let i=0;i<names.length;i++){
        const name = names[i]
        console.log(name);
        if(unique.includes(name)==false){
            unique.push(name);
        }
    }
    return unique;
}
const names=['abul','kabul','tabul','abul','tabul','tota','kopa'];
const unique_name = removeDuplicate(names);
console.log(unique_name);