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