

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();



// const [,,arg3= '--base=5'] = process.argv;
// const [,base] = arg3.split('=');
// console.log(base);
// console.log(process.argv);
//console.log(argv);
//console.log('Base: yargs ',argv.base);

// const base = 2;

crearArchivo(argv.b,argv.l).then(nombreArchivo => console.log(nombreArchivo)).catch(err => console.log(err));

