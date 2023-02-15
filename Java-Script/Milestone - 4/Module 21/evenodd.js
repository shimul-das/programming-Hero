function check_even_odd(number){
    const reminder=number%2;
    if(reminder==0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd")
    }

}

check_even_odd(303);