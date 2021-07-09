import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Municipio } from "./Municipio";

@Entity({ name: "TB_Departamentos" })
export class Departamento {
  constructor(
    id: number,
    nombre: string,
    estado: string,
    municipio: Municipio[]
  ) {
    this.Id = id;
    this.Nombre = nombre;
    this.Estado = estado;
    this.Municipio = municipio;
  }

  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Nombre: string;

  @Column()
  Estado: string;

  @OneToMany(() => Municipio, (municipio) => municipio.Departamento)
  Municipio: Municipio[];
}
