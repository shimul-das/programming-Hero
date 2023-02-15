function return_array_sum(num_array){
    var sum =0
for(let i=0; i< num_array.length;i++){
    let index=i;
    let element = num_array[i];
    let reminder=element%2;
    if(reminder !=0 ){
        sum= sum+element;
    }
    
    console.log(index, element, sum);
}
}

let num_array=[25,23,12,23,77,90];

return_array_sum(num_array);