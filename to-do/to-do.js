const fs = require('fs');

let listado=[];

let guardarDB=()=>{
    let data = JSON.stringify(listado);
    //EL PATH DEL FILE SE HACE DESDE EL APP.JS
    fs.writeFile('./db/data.json',data,err=>{
        if ( err ) console.log(err);
    });
};

let cargarDB = ()=>{
    try{
        //Para recuperar los datos se podría hacer una petición http pero como con node trabajamos del lado del servidor no es necesario y se hace únicamente con el require
        listado = require('../db/data.json');
    }
    catch(error)
    {
        listado = [];
    }
};

let listar = ()=>{

    cargarDB();
    if(listado.length==0)
    {
        console.log("No hay tareas por hacer");
        return;
    }
    console.log("Tareas por hacer");
    for(let tarea of listado)
    {
        console.log(tarea.descripcion);
        console.log(`Estado de la tarea: ${tarea.completada}`);
    }

};

let actualizarTarea = (descripcion , completada) =>
{
    cargarDB();

    if(listado.length==0)
    {
        console.log("No hay tareas por hacer");
        return;
    }

    let indice = listado.findIndex(tarea => tarea.descripcion===descripcion);
    console.log(indice);
    if( indice != -1)
    {
        listado[indice].completada=completada;
        guardarDB();
    }
    else
    return;

};

let borrarTarea = (descripcion) => {

    cargarDB()
    if(listado.length==0)
    {
        console.log("No hay tareas por hacer");
        return -1;
    }
    let indice = listado.findIndex(tarea=>tarea.descripcion===descripcion);
    let eliminado="";
    if(indice!=-1)
    {
        eliminado = listado.splice(indice , 1);//Retorna un array
        guardarDB();
        return eliminado[0];
    }
    else{
        console.log("No se ha encontrado la tarea con la descripcion indicada");
        return -1;
    }
    


}

let crearTarea = (descripcion)=>{

    cargarDB();

    let tarea = {
        descripcion,
        completada:false
    }

    listado.push(tarea);
    guardarDB();

};

module.exports = {
    crearTarea,
    listar,
    actualizarTarea,
    borrarTarea
}