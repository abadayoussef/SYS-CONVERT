function convert(){
    let decimal = document.getElementById("decimal").value;
    document.getElementById("binary").innerHTML = decToAllSys(decimal, 2); //parseInt(decimal).toString(2);
    document.getElementById("octal").innerHTML = decToAllSys(decimal, 8); //parseInt(decimal).toString(8);
    document.getElementById("hexadecimal").innerHTML = decToAllSys(decimal, 16); //parseInt(decimal).toString(16);
}
function decToAllSys(decimal, base){
    let Bites = [];
    let i = 0;
    let isLastBit = false;
    let hexadecimals = {10 : 'A', 11 : 'B', 12 : 'C',  13 : 'D',  14 : 'E',  15 : 'F'}
    while(!isLastBit){
        Bites[i] = (decimal % base) >= 10 ? hexadecimals[decimal % base] : decimal % base;
        decimal = Math.floor(decimal / base);
        isLastBit = (decimal === 0);
        i++;
    }
    return Bites.reverse();
}

