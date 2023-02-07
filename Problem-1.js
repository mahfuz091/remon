function mindGame(input){
    if(typeof input !== 'number'){
        return 'Please enter a number'
    }
    const result = (((((Math.abs(input))*3)+10)/2)-5);
    return result;
}
// This function works simple adding, deducting, Multiplication, devidation and Summation.  
const input = -33;
const result = mindGame(input);
console.log(result);