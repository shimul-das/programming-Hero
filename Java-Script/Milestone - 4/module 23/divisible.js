//show output 1-50
// If the number is divisible by 3 then instead of the number show 'foo';
//If the number is divisible by 5 then instead of the number show 'bar';
//If the number is divisible by 5 then instead of the number show 'foobar';

for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log('foobar')
    }
    else if(i%5==0){
        console.log('bar')
    }
    else if(i%3==0 ){
        console.log('foo')
    }
    console.log(i);
}