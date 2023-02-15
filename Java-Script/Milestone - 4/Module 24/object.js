const student ={
    name:"shimul chandre das",
    id:121,
    address:"movie cinema",
    isSingle:true,
    friend:['apu','raz','salma'],
    movies:[{name:'num 1',year:2015},{name:'king khan',year:2018}],
    act:function(){ //nam caile dite pari nao dite pari
        console.log('Acting like shakib Khan');

    },
    car:{
        brand:'tesla',
        price:50000,
        made:2025,
        manufacturer:{
            name:'tesla',
            ceo:'Elon Mask',
            country:'usa'
        }
    }
}
console.log(student.car);