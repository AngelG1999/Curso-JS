/*
Las funciones pueden tomar parámetros .
Los parámetros de la función son los nombres enumerados en la definición de la función.


SINTAXIS:

function name(param1, param2, param3){
    ...
}

Al igual que con las variables, los parámetros deben tener nombres , que están separados por comas entre paréntesis.


function hola(nombre){
    alert("hola" + nombre);

}

hola("miguel");

Los argumentos de la función son los valores reales pasados ​​(y recibidos por) la función.

Puede definir una sola función y pasarle diferentes valores de parámetros (argumentos).

*/
    /*

    MULTIPLES PARAMETROS

function mifuncion(x,y){
    ...
}


function mifuncion(x,y)
{
    document.write(x + " es " + y + "<br/>" + " hola");
}

mifuncion(20, 30);

Al llamar a la función, proporcione los argumentos en el mismo orden en que los definió.

Si pasa más argumentos de los definidos, se asignarán a una matriz llamada argumentos. Se pueden usar así: argumentos [0], argumentos [1], etc.

Si se llama a una función con argumentos faltantes (menos de los declarados), los valores faltantes se establecen como indefinidos , lo que indica que a una variable no se le ha asignado un valor.

    */