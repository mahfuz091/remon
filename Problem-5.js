// The function gemsToDimond takes three parameter, called firstFriendGems, secoundFriendGems, thirdFriendGems. The function consists of statement that says to return the parameter of the function convert dimond if total dimond is getter than 2000 than return total dimond duducts 2000 or return total dimond.




function gemsToDiamond(firstFriendGems, secoundFriendGems, thirdFriendGems){
    if(typeof firstFriendGems !== 'number' || typeof secoundFriendGems !== 'number' || typeof thirdFriendGems !== 'number'){
        return 'Please enter a number'
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

const input = gemsToDiamond(20, 200, 50);
console.log(input);