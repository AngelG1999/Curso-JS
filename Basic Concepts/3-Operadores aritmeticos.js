/* 
Los operadores aritmeticos realizan funciones aritmeticas en nuemros (literales o variables).

+
-
*
/
%
++ (increment)
-- (decrement)
*/

var a = 10+5;
var b = 10-5;
var c = 10*5;
var d = 10/5;
var e = 10%5;
var f = 10; f++;

//document.write();
/* --- */
//El operador de incremento incrementa el valor numérico de su operando en uno. Si se coloca antes del operando, devuelve el valor incrementado. Si se coloca después del operando, devuelve el valor original y luego incrementa el operando.
var aa = 0, bb = 10;
var aa = bb++;
//document.write(bb,"-", aa);

var aaa = 0, bbb = 10;
var aaa = ++bbb;
//document.write(aaa, "-", bbb);

/* --- */
//el operador de decremento disminuye el valor numérico de su operando en uno. Si se coloca antes del operando, devuelve el valor decrementado. Si se coloca después del operando, devuelve el valor original y luego disminuye el operando.
var ab = 0, ba = 10;
var ab = ba--
//document.write(ab, "-", ba);

var abb = 0, baa = 10;
var abb = --baa;
//document.write(abb, "-", baa)

/*
Al igual que en las matemáticas escolares, puede cambiar el orden de las operaciones aritméticas utilizando paréntesis.
Ejemplo: var x = (100 + 50) * 3;
*/