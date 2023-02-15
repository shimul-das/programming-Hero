const array=[25,30,36,33];
console.log(Array.isArray(array));

//concat
const new_array=[12,13,14,15,16];
const all_friend =new_array.concat(array)
console.log(all_friend)


////Slice
const do_slice=array.slice(1,3)
console.log(do_slice)
console.log(array)
//splice
const do_splice=array.splice(1,3,4444,55,577)
console.log(do_splice)
console.log(array)
