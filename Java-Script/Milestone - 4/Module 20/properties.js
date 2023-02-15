var shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}

//when you know the property name, use dot notation. to get the propert value.
var pencount =shoppingCart.pen;
console.log(pencount);
//
var percart2 = shoppingCart['pen'];
console.log(percart2 );

//when we do not know properties
var properties=Object.keys(shoppingCart);
var propertyvalues=Object.values(shoppingCart);
console.log(properties);
console.log(propertyvalues);

//another way

var property_name="mouse";
var propertyValue=shoppingCart[property_name];
console.log(property_name, propertyValue );
