//1.- Crear variable de nombre **arrayVacio** cuyo valor sea **un array vacío**

let arrayVacio = [];

//2.- Crear variable de nombre **arrayNumeros** declarada con un **array de números del 0 al 9 (0, 1, 2...)**

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//3.- Crear variable de nombre **arrayNumerosPares** declarada con un **array con los números pares del 0 al 9** (considerando al 0 par)

let arrayNumerosPares = [0, 2, 4, 6, 8]

//4.- Crear variable de nombre **arrayBidimensional** declarada con valor **array [[0, 1, 2], ['a', 'b', 'c']]**

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

//5.- Crea la función **suma** que acepte como argumento **dos números** y devuelva **el resultado de su suma**

function suma(a, b) {
    suma = a + b;
    return suma;
}

//6.- Crea la función **potenciacion** que acepte como argumento **dos números** y devuelva **el resultado de elevar el primero(a) al segundo(b) (a^b)**

a = 5
b = 3
function potenciacion(a, b) {
    let result;
    for(i = 0; i < b; i++) {
       result[i] = a * a;
    }
    
    return result;
}

//15.- Crear variable de nombre **arrayNumerosNeg** declarada con un **array de números del 0 al -9 (0, -1, -2...)**

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

//16.- Crear variable de nombre **holaMundo** declarada con valor **array con las palabras 'Hola' y 'Mundo'**

let holaMundo = ['Hola', 'Mundo'];

// 17.- Crear variable de nombre **loGuardoTodo** declarada con valor **array con valores 'hola', 'que', 23, 42.33 y 'tal'**

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']

//18.- Crear variable de nombre **arrayDeArrays** declarada con valor **array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]**

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]