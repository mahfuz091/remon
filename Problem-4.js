// The function findingBadData takes one parameter, called an arrey. The function consists of statement that says to return the parameter of the function count all of negetive value of this array.


function findingBadData(array){
    if(typeof(array) !== 'object'){
        return 'Please provide an arrey'
    }
    const badData=[];
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        
        
        if(element < 0){
            
            badData.push(element);
        }
    }
    return badData.length;
}
const input = [-2];
const result = findingBadData(input);
console.log(result);