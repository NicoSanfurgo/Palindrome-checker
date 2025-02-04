
function isPalindrome(str){

    const cleanStr = str.toLowerCase().replace(/[^-z0-9]/g,'');

    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;

}


function palindromeChecker(){

    const inputText = document.getElementById("inputText");

    const result = document.getElementById("result");

    if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is a palindrome`;
    }else{
        result.textContent = `"${inputText.value}" is Not a palindrome`;
    }

    result.classList.add('fadeIn');
    inputText.value = "";

}

document.getElementById('checkButton').addEventListener("click",palindromeChecker);