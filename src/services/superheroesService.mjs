import SuperHero from "../models/SuperHero.mjs";
import superHeroRepository from "../repositories/SuperHeroRepository.mjs";
import mongoose from 'mongoose';

export async function obtenerSuperheroPorId(id){
    return await superHeroRepository.obtenerPorId(id)
}

export async function obtenerTodosLosSuperheroes(){
    return await superHeroRepository.obtenerTodos();
}
export async function buscarSuperheroesPorAtributo(atributo, valor){
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30(){
    return await superHeroRepository.obtenerMayoresDe30();
}

///SPRINT 03 ///

export const agregarNuevoSuperheroe = async (nuevaData) => {
    try{
        const edad = Number(nuevaData.edad);
            if (isNaN(edad)) {
                throw new Error("Por favor, ingresar un valor numerico para la edad");
            }
        return await superHeroRepository.agregarNuevoHero(nuevaData)
    } catch(error){
        console.error("Error en el servicio al agregar el superhéroe:", error);
    throw error;
    }
    
}


    //ACTUALIZAR SUPERHEROE
    export async function editarSuperheroe(id, {
        nombreSuperheroe, 
        nombreReal, 
        edad,
        planetaOrigen,
        debilidad,
        poderes, 
        aliados,
        enemigos
    }){

        try{           
            const superheroEditado = await superHeroRepository.editarSuperhero(id, {
                nombreSuperheroe, 
                nombreReal, 
                edad,
                planetaOrigen,
                debilidad,
                poderes, 
                aliados,
                enemigos
            })
            return superheroEditado
        } catch (error) {
            
            throw new Error("Superheroe no encontrado o no se pudo actualizar");
        }       
    }

    export async function eliminarSuperheroe(id){

        try{
            const superheroeEliminado = await superHeroRepository.eliminarSuperhero(id)
            //console.log("Desde el servicio", superheroeEliminado);
            
            return superheroeEliminado
        }catch(error){
            throw new Error("Superheroe no encontrado o no se pudo actualizar");
        }

    }

    export async function eliminarSuperheroePornombre(nombre){

        try{
            const superheroeEliminadoPornombre = await superHeroRepository.eliminarSuperHeroPorNombre(nombre) //consulta a la base de datos
            return superheroeEliminadoPornombre

        }catch(error){
            throw new Error("Superheroe no encontrado o no se pudo actualizar (service)");
        }
    }


/////////TP 04

