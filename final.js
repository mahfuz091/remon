// This function takes an number and return that number multiply by 3 than added 10 than divided by 2 than deducts 5. 

function mindGame(number){
    if(typeof number !== 'number' || number < 0){
        return 'Please enter a valid number'
    }
    const result = (((((number)*3)+10)/2)-5);
    return result;
}





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




// The function gemsToDimond takes three parameter, called firstFriendGems, secoundFriendGems, thirdFriendGems. The function consists of statement that says to return the parameter of the function convert dimond if total dimond is getter than 2000 than return total dimond duducts 2000 or return total dimond.

function gemsToDiamond(firstFriendGems, secoundFriendGems, thirdFriendGems){
    if(typeof firstFriendGems !== 'number' || typeof secoundFriendGems !== 'number' || typeof thirdFriendGems !== 'number' || firstFriendGems < 0 || secoundFriendGems < 0 || thirdFriendGems < 0 ){
        return 'Please enter a valid number'
    }
    const firstFriendDimond = firstFriendGems * 21;
    const secoundFriendDimond = secoundFriendGems * 32;
    const thirdFriendDimond = thirdFriendGems * 43;
    const totalDimond = firstFriendDimond + secoundFriendDimond + thirdFriendDimond;
    if(totalDimond > (1000*2)){
        
        return totalDimond-2000;
    }
    else{
        return totalDimond;
    }
}
