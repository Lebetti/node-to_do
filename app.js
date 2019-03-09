
const argv = require('./config/yargs').argv;

const {crearTarea,listar,actualizarTarea,borrarTarea} = require('./to-do/to-do');

let comando = argv._[0];

switch(comando)
{
    case 'crear':{
        crearTarea(argv.descripcion)
        break;
    }
    case 'listar':{
        listar();
        break;
    }
    case 'actualizar':{
        actualizarTarea(argv.descripcion , argv.completado);
        break;
    }
    case 'borrar' : {
        let borrada = borrarTarea(argv.descripcion);
        if(borrada!=-1)
        {
            console.log(`La tarea eliminada es ${borrada.descripcion} cuyo estado es completada : ${borrada.completada} `);
            break;
        }
        else
        break;
    }
    default:{
        console.log("Comando no reconocido\nComandos disponibles: crear , listar, borrar, actualizar");
    }
}