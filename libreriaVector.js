//1. Crear Vector(n, m):number[]. Crea y devuelve un vector de n números aleatorios que van desde 0 hasta m.

function crearVector(n, m){

    let aleatorio = [];
    

    for(let i=0; i < n; i++){

        aleatorio.push(Math.round(Math.random() * m));
    
    }
    return aleatorio
}


//2. SumaVector(v1, v2):number[]. Suma dos vectores v1 y v2 si y solo si tienen el mismo 
//numero de elementos y devuelve el vector resultado de dicha suma.

<<<<<<< HEAD
=======
function sumaVector (v1, v2, v4){
    let v3 = []

    if(v1.length == v2.length){
        
        for (let i=0; i < v1.length; i++){
            
            v3[i] = v1[i] + v2[i] + v4[i];
        }
    }
        return v3
}

>>>>>>> Rama2

//3. ProductoNumeroVector(n, v): number[]. Multiplica el vector v por el numero y devuelve
//el vector resultado de dicho producto.

function productoNumeroVector (n, v){
    v2= [];

    for(let i=0; i < v.length; i++){

        v2[i] = v[i] * n;
    }
    
    return v2
}   

//4. RestaVector(v1, v2): number[]. Resta dos vectores v1 y v2 si y solo si tienen el mismo
//numero de elementos y devuelve el vector resultado de dicha resta.

function restaVector (ve1, ve2){   
    ve3 = []

    if(ve1.length == ve2.length){

        for (let i=0; i < ve1.length; i++){

            ve3[i] = ve1[i] - ve2[i]
        }
    }
        return ve3
}


//5. ProductoVector(v1, v2): Multiplica dos vectores v1 y v2 si y solo si tienen el mismo número
//de elementos y devuelve el vector resultado de dicho producto.

function productoVector (vec1, vec2){
    vec3 = []

    if(vec1.length == vec2.length){

        for(let i =0; i < vec1.length; i++){

            vec3[i] = vec1[i] * vec2[i];
        }
    }
        return vec3
}

//Función para calcular un número al cuadrado

let cuadrado = (num) => num**2 