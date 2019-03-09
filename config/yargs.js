
let descripcion = {
    demand:true,   
    alias:'d'
};

const argv = require('yargs')


.command('crear','Crea una nueva tarea',{
    descripcion
})
.command('listar','Lista las tareas existentes',{
})
.command('actualizar','Actualiza una tarea existente',{
    descripcion, // descripcion:descripcion NO ES NECESARIO PORQUE ECMASCRIPT LO COMPRENDE
    completado:{
        alias:'c',
        default:true
    }
})
.command('borrar','Elimina una tarea existente',{
    descripcion
})
.help()
.argv;

module.exports = {
    argv
}