/* Tipos de datos
Primitivos
    Numericos (int y double) - 10 y 0.8
    Strings - hola mundo
    Boolean - true y false
    Char - H
Complejos
    Objetos {}
    Arreglos []


Fuertemente tipado
Que el lenguaje de programa requiere saber explicitamente el tipo de dato al momento de 
crear una variable.
Ejemplo (java):
int numero = 10;
double numeroDecimal = 22.75;
String myName = "montoya";
double numeroDecimal = 22.75;
char myInitial = 'M';
boolean flag = true;

// error
flag = 22.77;
flag = "juanito banana"

Debilmente tipado
Significa que el lenguaje interpreta el tipo de dato y no requiere que se defina explicitamente
Ejemplo (javascript):
var number = 6;
*/

/**
 * Tipos primitivos
 */
var numberSix = 6;
var decimalNumber = 22.75;
var myName = "montoya";
var myInitial = "M";
var flag = true;
// OK
flag = 22.77;
flag = "juanito banana";

/**
 * Tipos complejos
 */
// objects
var video = {
    name: "peaches", // video.name
    author: "jack black", // video.author
}

// arrays
var comments = [
    "el video es buenardo", // comments[0]
    "a mi no me gusto", // comments[1]
    "todos somos browser", // comments[2]
];
console.log(comments);
console.log(comments[1]);
console.log(comments[3]); // undefined

// ejemplo 2
var song = {
    // atributo/key: value 
    name: "peaches", // video.name
    author: "jack black", // video.author
    comments: [
    "el video es buenardo", // comments[0]
    "a mi no me gusto", // comments[1]
    "todos somos browser", // comments[2]
    ],
    reactions: [
      { type: 'like', user: 'gaby' },
      { type: 'unlike', user: 'cyn' },
      { type: 'love', user: 'salvador' },
    ]
}

console.log(song);
console.log(song.reactions);
console.log(song.reactions[1]);
console.log(song.reactions[1].user);
// obtener tamanio de array
console.log(song.reactions.length);

// mas formas de acceder a una key de un objeto
console.log(song.name);
console.log(song['name']);
const myName = 'name';
console.log(song[myName]);
console.log(song.myName); // error
const myNames = 'reactions';
console.log(song[myNames]);

// . para acceder a keys, atributo, propiedad, prop, clave, llave
// [n] acceso a arreglos
// ['nameProp'] para acceder a keys, atributo, propiedad, prop, clave, llave
// [nameVar] para acceder a keys, atributo, propiedad, prop, clave, llave
// nameObj.nameFuncion(param1, param2,.. paramN) Acceder a funciones
