// This function takes an number and return that number multiply by 3 than added 10 than divided by 2 than deducts 5. 


function mindGame(number){
    if(typeof number !== 'number' || number < 0){
        return 'Please enter a valid number'
    }
    const result = (((((number)*3)+10)/2)-5);
    return result;
}
// This function works simple adding, deducting, Multiplication, devidation and Summation.  
const input = 5;
const result = mindGame(input);
console.log(result);