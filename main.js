function convert(){
    let decimal = document.getElementById("decimal").value;
    document.getElementById("binary").innerHTML = parseInt(decimal).toString(2);
    document.getElementById("octal").innerHTML = parseInt(decimal).toString(8);
    document.getElementById("hexadecimal").innerHTML = parseInt(decimal).toString(16);
}
