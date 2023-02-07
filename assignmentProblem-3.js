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
