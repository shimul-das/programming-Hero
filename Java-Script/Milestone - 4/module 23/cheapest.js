const phones =[
    {name:'Samsung', camera:12, storage:'32gb',price:39000,color:"silver"},
    {name:'Nokia', camera:10, storage:'32gb',price:36000,color:"silver"},
    {name:'Walton', camera:12, storage:'62gb',price:36000,color:"silver"},
    {name:'Oppo', camera:10, storage:'32gb',price:38000,color:"silver"},
    {name:'HTC', camera:12, storage:'62gb',price:37000,color:"silver"},
];
function chepest_phone(phones){
    var cheapest = phones[0];
    for(let i=0; i<phones.length;i++){
        var phone=phones[i];
        console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;

}

const mySelection = chepest_phone(phones)
console.log("Cheaspest Phone:",mySelection);