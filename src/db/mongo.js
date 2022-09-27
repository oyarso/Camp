const mongo = require('mongoose')
const url = 'mongodb://localhost:27017'

mongo.connect(url, function(err){
    if(err){
        throw err;
    }else{
        console.log("conexion establecida")
    }
})

module.exports = mongo;