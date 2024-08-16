

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

const result = checkName({name:'nafisa', age: 55});
console.log(result)

// -------------correct----------