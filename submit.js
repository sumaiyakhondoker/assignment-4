function calculateMoney(ticketSale){
    if(ticketSale < 0){
     return "The ticketsale number should be a positive number."
    }
     const ticketPriceTotal = ticketSale * 120;
     const totalSpending = 500 + (8*50);
     const remainingMoney = ticketPriceTotal - totalSpending;
     return remainingMoney;
 
 }



function checkName(name){
    if(typeof name !== "string"){
        return "invalid";
    }
    const chars = 'ayieouw';
    name = name.toLowerCase();
    const namesLastChar = name[name.length - 1];
    if(chars.includes(namesLastChar)){
        return "Good Name."
    }
    else{
        return "Bad Name."
    }
}


function deleteInvalids(array){
    if(Array.isArray(array) === false){
        return 'please give an array.';
    }
    const numbers = [];
    for(const item of array){
        
        if(typeof item === 'number'){
            if(isNaN(item)){
                continue;
            }
            numbers.push(item);
        }
    }
    return numbers;
}



function password(obj){
    const birthYearLength = obj.birthYear.toString().length;
    const keys = Object.keys(obj);
    if(keys.length !== 3 || birthYearLength !== 4){
        return 'invalid';
    }
    
    const siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    const password = siteName + "#" + obj.name + "@"+ obj.birthYear;
    return password;
}


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

const totalSpending = totalTax + livingCost;
const savings = totalEarnings - totalSpending;
if(savings < 0){
    return "earn more";
}
return savings;

}