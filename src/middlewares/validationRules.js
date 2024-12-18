import { body } from 'express-validator';

export const registerValidationRules = () => [
  body("nombreSuperheroe")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("No puede estar vacio - nombre superheroe")
    .isLength({ min: 3, max: 25 })
    .withMessage("Longitud minima de 3 caracteres y maxima de 25 caracteres - nombre superheroe"),
  
  body("nombreReal")
    .trim()
    .escape()
    .notEmpty()
    .isAlphanumeric()
    .withMessage("No puede estar vacio - nombre real")
    .isLength({ min: 3, max: 25 })
    .withMessage("Longitud minima de 3 caracteres y maxima de 25 caracteres - nombre real"),
  
  body("edad")
    .exists()
    .isNumeric()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("No puede estar vacio")
    .isInt({ min: 0 }),

  body("planetaOrigen")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("No puede estar vacio - Planeta Origen")
    .isLength({ min: 3, max: 25 })
    .withMessage("Longitud minima de 3 caracteres y maxima de 25 caracteres - planeta origen"),

    body("debilidad")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("No puede estar vacio - Debilidad")
    .isLength({ min: 3, max: 25 })
    .withMessage("Longitud minima de 3 caracteres y maxima de 25 caracteres - debilidad"),

];


export const validatePoderes = body('poderes')
.notEmpty()
.withMessage('El campo poderes es obligatorio')
.isArray({ min: 1 })
.withMessage('Debe proporcionar al menos un poder')
.bail() //Detiene la ejecución si algina ha fallado

//custum(callback) -> permite definir validaciones especificas 
.custom((poderes)=>{
    for(const poder of poderes){
        if (typeof poder !== 'string') {
            throw new Error("Todos los poderes deben ser cadenas de texto");
        }
        if (poder.trim().length < 3 || poder.trim().length > 60) {
            throw new Error("Cada poder debe contener entre 3  y 60 caracteres");
        }
    }
    return true
})


export const validateAliados = body('aliados')
.notEmpty()
.withMessage('El campo poderes es obligatorio')
.isArray({ min: 1 })
.withMessage('Debe proporcionar al menos un aliado')
.bail() //Detiene la ejecución si algina ha fallado

//custum(callback) -> permite definir validaciones especificas 
.custom((aliados)=>{
    for(const aliado of aliados){
        if (typeof aliado !== 'string') {
            throw new Error("Todos los aliados deben ser cadenas de texto");
        }
        if (aliado.trim().length < 3 || aliado.trim().length > 60) {
            throw new Error("Cada poder debe contener entre 3  y 60 caracteres");
        }
    }
    return true
})

export const validateEnemigos = body('enemigos')
.notEmpty()
.withMessage('El campo poderes es obligatorio')
.isArray({ min: 1 })
.withMessage('Debe proporcionar al menos un enemigo')
.bail() //Detiene la ejecución si algina ha fallado

//custum(callback) -> permite definir validaciones especificas 
.custom((enemigos)=>{
    for(const enemigo of enemigos){
        if (typeof enemigo !== 'string') {
            throw new Error("Todos los aliados deben ser cadenas de texto");
        }
        if (enemigo.trim().length < 3 || enemigo.trim().length > 60) {
            throw new Error("Cada poder debe contener entre 3  y 60 caracteres");
        }
    }
    return true
})
