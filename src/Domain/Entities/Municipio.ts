import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Concesionario } from "./Concesionario";
import { Persona } from "./Persona";
import { Departamento } from "./Departamento";

@Entity({ name: "TB_Municipios" })
export class Municipio {
  constructor(
    id: number,
    nombre: string,
    estado: string,
    concesionario: Concesionario[],
    persona: Persona[],
    departamento: Departamento
  ) {
    this.Id = id;
    this.Nombre = nombre;
    this.Estado = estado;
    this.Concesionario = concesionario;
    this.Persona = persona;
    this.Departamento = departamento;
  }

  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Nombre: string;

  @Column()
  Estado: string;

  @OneToMany(() => Concesionario, (concesionario) => concesionario.Municipio)
  Concesionario: Concesionario[];

  @OneToMany(() => Persona, (persona) => persona.Municipio)
  Persona: Persona[];

  @ManyToOne(() => Departamento, (departamento) => departamento.Municipio)
  Departamento: Departamento;
}
