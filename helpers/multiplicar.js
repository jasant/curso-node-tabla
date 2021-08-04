const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar) => {

    console.log('==========================='.bgBlue.bold);
    console.log(`        Tabla del ${base}`);
    console.log('==========================='.bgBlue);

    let salida='';

    for(let i=1;i<=10;i++){
        salida += `${base} x ${i} = ${base * i}\n`;
    }
    if(listar){
        console.log(salida);
    }
    try{
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    }catch(err){
        throw err;
    }

    return `Tabla de ${base}.txt creada!`;

}

module.exports = {
    crearArchivo
}