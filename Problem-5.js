function gemsToDiamond(firstFriendGems, secoundFriendGems, thirdFriendGems){
    if(typeof firstFriendGems !== 'number' || typeof secoundFriendGems !== 'number' || typeof thirdFriendGems !== 'number'){
        return 'Please enter a number'
    }
    const firstFriendDimond = firstFriendGems * 21;
    const secoundFriendDimond = secoundFriendGems * 32;
    const thirdFriendDimond = thirdFriendGems * 43;
    const totalDimond = firstFriendDimond + secoundFriendDimond + thirdFriendDimond;
    if(totalDimond > (1000*2)){
        givenDimond = totalDimond - 2000;
        return givenDimond;
    }
    else{
        return totalDimond;
    }
}

const input = gemsToDiamond(100,5,1);
console.log(input);