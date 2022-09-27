const controller = {} // Controller
    
controller.index = (req , res)=>{ //function controller
    res.render('index', {
        titulo:"app",
        boton:"CREAR"
    })
    // Controller code here
}
    
module.exports = controller //Export Module