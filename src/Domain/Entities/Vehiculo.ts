import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Concesionario } from "./Concesionario";
import { Cotizacion } from "./Cotizacion";

@Entity({ name: "TB_Vehiculos" })
export class Vehiculo {
  constructor(
    id: number,
    marca: string,
    anio: string,
    puertas: number,
    traccion: string,
    tipo: string,
    estado: string,
    concesionario: Concesionario,
    cotizacion: Cotizacion[]
  ) {
    this.Id = id;
    this.Marca = marca;
    this.Estado = estado;
    this.Anio = anio;
    this.Puertas = puertas;
    this.Traccion = traccion;
    this.Tipo = tipo;
    this.Concesionario = concesionario;
    this.Cotizacion = cotizacion;
  }

  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Marca: string;

  @Column()
  Anio: string;

  @Column()
  Puertas: number;

  @Column()
  Traccion: string;

  @Column()
  Tipo: string;

  @Column()
  Estado: string;

  @ManyToOne(() => Concesionario, (concesionario) => concesionario.Vehiculo)
  Concesionario: Concesionario;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.Vehiculo)
  Cotizacion: Cotizacion[];
}
