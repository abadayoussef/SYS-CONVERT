function convert(){
    let decimal = document.getElementById("decimal").value;
    document.getElementById("binary").innerHTML = decToAllSys(decimal, 2); //parseInt(decimal).toString(2);
    document.getElementById("octal").innerHTML = decToAllSys(decimal, 8); //parseInt(decimal).toString(8);
    document.getElementById("hexadecimal").innerHTML = decToAllSys(decimal, 16); //parseInt(decimal).toString(16);
}

function decToAllSys(decimal, base){
    //decimal to binary
    let Bites = [];
    let i = 0;
    let isLastBit = false;
    let hexadecimals = {10 : 'A', 11 : 'B', 12 : 'C',  13 : 'D',  14 : 'E',  15 : 'F'}
    if(base === 2){
        while(!isLastBit){
            Bites[i] = decimal % 2;
            decimal = Math.floor(decimal / 2);
            isLastBit = (decimal === 0);
            i++;
        }
     }else if(base === 8){
        while(!isLastBit){
            Bites[i] = decimal % 8;
            decimal = Math.floor(decimal / 8);
            isLastBit = (decimal === 0);
            i++;
        }
     }
     else if(base === 16){
        while(!isLastBit){
            Bites[i] = (decimal % 16) >= 10 ? hexadecimals[decimal % 16] : decimal % 16;
            decimal = Math.floor(decimal / 16);
            isLastBit = (decimal === 0);
            i++;
        }
     }
     return Bites.reverse();
}

