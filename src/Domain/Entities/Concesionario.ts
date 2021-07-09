import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Municipio } from "./Municipio";
import { Vehiculo } from "./Vehiculo";

@Entity({ name: "TB_Concesionarios" })
export class Concesionario {
  constructor(
    id: number,
    nombre: string,
    razonSocial: string,
    estado: string,
    municipio: Municipio,
    vehiculo: Vehiculo[]
  ) {
    this.Id = id;
    this.Nombre = nombre;
    this.RazonSocial = razonSocial;
    this.Estado = estado;
    this.Municipio = municipio;
    this.Vehiculo = vehiculo;
  }

  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Nombre: string;

  @Column()
  RazonSocial: string;

  @Column()
  Estado: string;

  @ManyToOne(() => Municipio, (municipio) => municipio.Concesionario)
  Municipio: Municipio;

  @OneToMany(() => Vehiculo, (vehiculo) => vehiculo.Concesionario)
  Vehiculo: Vehiculo[];
}
