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

const result = password({ name: "maisha", birthYear: 2002 });
console.log(result);
