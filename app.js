const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const {parametro} = require('./config/yargs')
const colors = require('colors')

let comando = parametro._[0];

switch(comando) {
    case 'listar':
        listarArchivo(parametro.base, parametro.limite);
        break;

    case 'crear':
        crearArchivo(parametro.base, parametro.limite)
            .then(archivo => console.log(`El archivo ${archivo.yellow} ha sido creado`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('tu maldita madre');
}