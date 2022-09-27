const conexion = require('./conexion')
const { use } = require('../routes/index.routes');

const crear = document.getElementById('crearbase');

const dbNuevo = crear.addEventListener('click', () => {
    conexion.query("CREATE DATABASE NUEVA_DB", (err, result)=>{
        if(err){
            throw err;
        }else{
            console.log("bade de datos creada");
            alert("base de datos creada")
        }
    })
})

dbNuevo();
module.exports = dbNew