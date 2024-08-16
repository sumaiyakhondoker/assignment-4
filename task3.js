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

const result = deleteInvalids({num: [ 1 , 2 , 3 ]});
console.log(result)

