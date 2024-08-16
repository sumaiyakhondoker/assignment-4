function monthlySavings(array , livingCost){
    
    if(Array.isArray(array) === false && livingCost !== 'number'){
        return 'invalid input';
    }
    let totalEarnings = 0;
    let totalTax = 0;
    const taxPercentage = 20/100;
for(let earning of array){
    if(earning >= 3000){
        tax = earning * taxPercentage;
        totalTax = totalTax + tax;
    }
     totalEarnings = totalEarnings + earning;
    
}
// console.log("tax " ,totalTax)
// console.log(totalEarnings)
const totalSpending = totalTax + livingCost;
const savings = totalEarnings - totalSpending;
if(savings < 0){
    return "earn more";
}
return savings;

}

const result = monthlySavings(100, [ 900 , 2700 , 3400]);
console.log(result);
