// The function IsLGSeven takes one parameter, called number. The function consists of statement that says to return the parameter of the function if number deducting by seven and result is less than seven return result or result is getterthan or equal seven than return the number multiply by 2.


function isLGSeven(number){
    if(typeof number !== 'number'){
        return 'Please enter a number'
    }
    const result = number - 7;
    if(result < 7){
        return result; 
    }
    else{
        return number*2;
    }
}
const input = 14;
const result = isLGSeven(input);
console.log(result);
