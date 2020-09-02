const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const yargs = require('yargs');
const parametro = yargs
    .command('listar','Imprime en consola la tabla de multiplicar', options)
    .command('crear','Crea un archivo con la tabla de multiplicar', options)
    .help().argv;

module.exports = {parametro}