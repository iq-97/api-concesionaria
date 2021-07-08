import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Concesionario } from "./Concesionario";

@Entity({name: "TB_Municipios"}) 
export class Municipio {

    constructor(id: number, nombre: string, estado: string, concesionario: Concesionario[]) {
        this.Id = id,
        this.Nombre = nombre,
        this.Estado = estado,
        this.Concesionario = concesionario
    }

   @PrimaryGeneratedColumn() 
   Id: number; 
   
   @Column() 
   Nombre: string; 
   
   @Column() 
   Estado: string; 

   @OneToMany(() => Concesionario, concesionario => concesionario.Municipio)
   Concesionario: Concesionario[];
}

