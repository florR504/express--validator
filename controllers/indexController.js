const { validationResult} = require('express-validator');

const index = {
    home : function(req, res) {
        res.render('index', { title: 'express', old : undefined, color:color })
       
        
    },
    processForm : (req, res)=>{

        let userData = { 
            name : req.body.name,
            colores : req.body.colores,
            email: req.body.email,
            edad: req.body.edad,
        }
        req.session.colores = userData.colores
        let color = req.session.colores
       
       
        let resultValidation = validationResult(req)
        if(!resultValidation.isEmpty()){
            
            res.render('index', {errors : resultValidation.mapped(), old: undefined, color:color})
        }else{
        
            res.render('index', {old : userData, color:color})
       }
       console.log(errors)
       
       
    }
}

module.exports = index;