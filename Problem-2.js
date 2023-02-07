// The function evenOdd takes one parameter, called stringInput. The function consists of statement that says to return the parameter of the function if string length is even than return even else string length is odd it return odd.

function evenOdd(stringInput){
    if(typeof stringInput !== 'string'){
        return 'Please provide a valid String'
    }
    if(stringInput.length % 2 === 0){
        return 'even'
    }
    else{
        return 'odd'
    }

}
const mystr = 'Batch7';
const result = evenOdd(mystr);
console.log(result);