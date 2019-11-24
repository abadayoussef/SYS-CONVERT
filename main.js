document.getElementById("number").focus();

function convert(event){
    let value = document.getElementById("number").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    document.getElementById("result").innerHTML = decToAllSys(BaseToDec(value,parseInt(from)),parseInt(to));
}

function ValidFloat(decimal){
    let FloatingLength = decimal.toString().replace(/([0-9]*?\.)/g,'').length;
    let floatingPoints = (decimal % 1.0).toFixed(FloatingLength);
    return floatingPoints;
}

function decToAllSys(decimal, base){
    let format = '';
    let realPart = Math.floor(decimal);
    let fractPart = ValidFloat(decimal);
    let i = 0;
    let hexadecimals = {10 : 'A', 11 : 'B', 12 : 'C',  13 : 'D',  14 : 'E',  15 : 'F'};
    while(realPart){
        format += (realPart % base) >= 10 ? hexadecimals[realPart % base] : realPart % base;
        realPart = Math.floor(realPart / base);
    }
    format = (format.length > 0) ? format.split('',format.length).reverse().toString().replace(/,/g,'') : '0';
    while(fractPart != 0.0){
        if(i === 0) format += '.';
        fractPart = fractPart * base;
        format += Math.floor(fractPart) >= 10 ? hexadecimals[Math.floor(fractPart)] : Math.floor(fractPart);
        fractPart = ValidFloat(fractPart);
        i++;
        if(i > 16) break;
    }
    return format;
}
function BaseToDec(number, base){
    number = number.toString();
    let realPart = number;
    let fractPart = 0;
    let hexadecimals = {'A' : '10', 'B' : '11', 'C' : '12',  'D' : '13',  'E' : '14',  'F' : '15'};
    let total = 0;

    if(number.indexOf(".") != -1){
        realPart = number.split(".")[0]; 
        fractPart = number.split(".")[1].split('');
    }
    for(let i = 0; i < realPart.length ; i++){
        let currentBit = realPart.length - 1 - i;
        var factor = (hexadecimals[realPart[currentBit]] != undefined) ?  hexadecimals[realPart[currentBit]] : realPart[currentBit];
        total += Math.pow(base, i) * parseInt(factor);
    }
    for(let i = 0; i < fractPart.length; i++){
        fractPart[i] = (hexadecimals[fractPart[i]] != undefined) ? hexadecimals[fractPart[i]] : fractPart[i];
        total += Math.pow(base, -i-1) * parseInt(fractPart[i]);
        if(i > 16) break;
    }
    return total;
}