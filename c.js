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
console.log(gemsToDiamond(1,1,1));