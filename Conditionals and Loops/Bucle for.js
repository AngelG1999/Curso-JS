/*

for, while y do while

 */

    /*
    
    FOR

for (instruccion 1; declaracion 2; declaracion3){
    bloque de codigo a ejecutar

}

-La instrucción 1:
    -Establece una variable antes de que comience el ciclo ( var i = 1).
    -La instrucción 1 es opcional y puede omitirse si sus valores se establecen antes de que comience el ciclo.
    -Además, puede iniciar más de un valor en la instrucción 1 , usando comas para separarlos.

-La La instrucción 2 define la condición para que el ciclo se ejecute (debo ser menor o igual que 5):
    -Si la declaración 2 devuelve verdadero, el ciclo comenzará nuevamente, si devuelve falso, el ciclo finalizará.
    -Si omite la declaración 2, debe proporcionar un descanso dentro del ciclo. De lo contrario, el ciclo nunca terminará.
    
-La instrucción 3 aumenta un valor (i ++) cada vez que se ejecuta el bloque de código en el bucle:
    -La declaración 3 se usa para cambiar la variable inicial . Puede hacer cualquier cosa, incluido el incremento negativo (i--), el incremento positivo (i = i + 15) o cualquier otra cosa.
    -La declaración 3 también es opcional, y se puede omitir si incrementa sus valores dentro del ciclo.


Ejemplo:

for (i=1; i<=5; i++){
    document.write(i+"<br/>");
}




    */
   var x = 0;
for (; x <= 20; x +=2) {
   document.write(x); 
}