
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Municipio } from "./Municipio";

@Entity({name: "TB_Concesionarios"}) 
export class Concesionario {

    constructor(id: number, gender: string, country: string, estado: string, municipio: Municipio) {
        this.Id = id,
        this.Nombre = gender,
        this.RazonSocial = country
        this.Estado = estado,
        this.Municipio = municipio
      }

   @PrimaryGeneratedColumn() 
   Id: number; 
   
   @Column() 
   Nombre: string; 
   
   @Column() 
   RazonSocial: string;

   @Column() 
   Estado: string; 
   
   @ManyToOne(() => Municipio, municipio => municipio.Concesionario)
   Municipio: Municipio; 
}