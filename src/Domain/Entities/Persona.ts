import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Municipio } from "./Municipio";
import { Localizador } from "./Localizador";
import { Cotizacion } from "./Cotizacion";

@Entity({ name: "TB_Personas" })
export class Persona {
  constructor(
    id: number,
    nombre: string,
    apellido: string,
    nacimiento: Date,
    tipo: string,
    estado: string,
    municipio: Municipio,
    localizador: Localizador[],
    cotizacion: Cotizacion[]
  ) {
    this.Id = id;
    this.Nombres = nombre;
    this.Apellidos = apellido;
    this.Nacimiento = nacimiento;
    this.Estado = estado;
    this.Municipio = municipio;
    this.Localizador = localizador;
    this.Cotizacion = cotizacion;
  }

  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Nombres: string;

  @Column()
  Apellidos: string;

  @Column()
  Nacimiento: Date;

  @Column()
  Estado: string;

  @ManyToOne(() => Municipio, (municipio) => municipio.Persona)
  Municipio: Municipio;


  @OneToMany(() => Localizador, (localizador) => localizador.Persona)
  Localizador: Localizador[];

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.Cliente)
  Cotizacion: Cotizacion[];

}
