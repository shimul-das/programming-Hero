var shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}
// const keys=Object.keys(shoppingCart);
// console.log(keys);
// const values=Object.values(shoppingCart);
// console.log(values);

// for(var i=0; i< keys.length;i++){
//     // console.log(keys[i]);
//     var propertyName=keys[i];
//     var propertyValue=values[i];
//     console.log(propertyName + ":" + propertyValue);

// }

//for in

for(var propertyName in shoppingCart){
    const value=shoppingCart[propertyName];
    console.log(propertyName + ":" + value);
}