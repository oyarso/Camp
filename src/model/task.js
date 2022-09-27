module.exports = function () {
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;

    let db;
    if (!db) {
        db = mongoose.connect("mongodb://localhost/3003");
    }
    
    var Task = new Schema({
        rut: String,
        nombre: String,
        status: Boolean
    });

    return mongoose.model("task",Task);
}