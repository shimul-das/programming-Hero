function sum(i){
    if(i==1){
        return 1;
    }
    console.log(i);
    return i+sum(i-1);
   
}
const result=sum(5);
console.log(result);
//recursive way.

//but stoping position di nai
//kono function er maj theke sei function ke abar call korake recurtive function bole.