const products=[
    {id:1,name:'nokoa',price:10000}
]
function matchedProducts(products,search){
    const matched=[];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched
}

const result = matchedProducts(products,'phone');
console.log(result);