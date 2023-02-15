// chair --> 3 crf
// table --> 10 cft
// bed   --> 50cft
//Here const per iter wood requirement
//vary quantity

function wood_calculation(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood= 3
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    const total=(chairWood+tableWood+bedWood)
    console.log(chairQuantity,tableQuantity,bedQuantity);
    return total;
}

const totalWood = wood_calculation(2,2,5)
console.log(totalWood);