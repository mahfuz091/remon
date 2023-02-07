function findingBadData(arrey){
    if(typeof(arrey) !== 'object'){
        return 'Please provide an arrey'
    }
    const badData=[];
    for(let i = 0; i < arrey.length; i++){
        const element = arrey[i];
        
        
        if(element < 0){
            
            badData.push(element);
        }
    }
    return badData.length;
}
const input = [-5];
const result = findingBadData(input);
console.log(result);