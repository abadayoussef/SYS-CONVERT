function convertDecimal(){
    let decimal = document.getElementById("decimal").value;
    document.getElementById("decimalToBinary").innerHTML = decToAllSys(decimal, 2); //parseInt(decimal).toString(2);
    document.getElementById("decimalToOctal").innerHTML = decToAllSys(decimal, 8); //parseInt(decimal).toString(8);
    document.getElementById("decimalToHexadecimal").innerHTML = decToAllSys(decimal, 16); //parseInt(decimal).toString(16);
}

function decToAllSys(decimal, base){
    let Reals = [];
    let Floats = [];
    let realPart = Math.floor(decimal);
    let fractPart = ValidFloat(decimal);
    let i = 0;
    let hexadecimals = {10 : 'A', 11 : 'B', 12 : 'C',  13 : 'D',  14 : 'E',  15 : 'F'}

    while(realPart){
        Reals[i] = (realPart % base) >= 10 ? hexadecimals[realPart % base] : realPart % base;
        realPart = Math.floor(realPart / base);
        i++;
    }
    i = 0;
    while(fractPart != 0.0){
        Floats[i] = Math.floor(fractPart * base) >= 10 ? hexadecimals[Math.floor(fractPart * base)] : Math.floor(fractPart * base);
        fractPart = ValidFloat(fractPart * base);
        i++;
        if(i > 4) break;
    }

    let real = (Reals.length > 0) ? Reals.reverse().toString().replace(/,/g,'') : '0';
    let float = (Floats.length > 0) ? "." + Floats.toString().replace(/,/g,'') : '';
    console.log(Floats.length);
    return real + float;
}

function ValidFloat(decimal){
    let FloatingLength = decimal.toString().replace(/([0-9]*?\.)/g,'').length;
    let floatingPoints = (decimal % 1.0).toFixed(FloatingLength);
    return floatingPoints;
}
