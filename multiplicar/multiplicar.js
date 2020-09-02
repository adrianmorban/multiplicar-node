const fs = require('fs');
const colors = require('colors')

const crearArchivo = (base, limite) => {
    
    return new Promise((resolve,reject) => {        
        if(!Number(base)||!Number(limite)) {
            reject(`Uno de los parametros no es un numero`);
            return;
        }
        let data = ''

        for (let i = 1; i <= limite; i++){
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    })
}

const listarArchivo = (base, limite) => {
    console.log(`========== Tabla de ${base} ==========`.white)

    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

module.exports = {crearArchivo, listarArchivo};