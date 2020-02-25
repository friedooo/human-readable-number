module.exports = function toReadable (number) {

    let result = '';
    let digits = ['zero ', 'one ', 'two ', 'three ', 'four ', 'five ', 
    'six ', 'seven ', 'eight ', 'nine '];
    let fromTen2Nineteen = ['ten ', 'eleven ', 'twelve ', 
    'thirteen ', 'fourteen ', 'fifteen ',
    'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let dozens = [,,'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 
    'eighty ', 'ninety '];
    let strArr = String(number).split('');
    
    
    if (strArr.length == 1)
    result = digits[number];
    
    
    function secondOrder(strArr)
    {
        let result1 = '';
        if (strArr[0] == 1)
        result1 += fromTen2Nineteen[strArr[1]];
    
        else if (strArr[0] > 1)
        {
            result1 += dozens[strArr[0]];
    
            if (strArr[1] != 0)
            result1 += digits[strArr[1]];
        }
    return result1;
    }
    
    if (strArr.length == 2)
    {
        result = secondOrder(strArr);
    }
    
    if (strArr.length == 3)
    {
        if (strArr[1] == 0 && strArr[2] == 0)
        result += digits[strArr[0]] + 'hundred ';
        else if (strArr[1] == 0)
        {
            result += digits[strArr[0]] + 'hundred ';
            result += digits[strArr[2]];
        }   
        else
        {
            result += digits[strArr[0]] + 'hundred ';
             strArr.shift();
            result += secondOrder(strArr)
        }
    }
    
    return result.slice(0,result.length-1);
}
