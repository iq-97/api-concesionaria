import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cotizacion } from "./Cotizacion";

@Entity({ name: "TB_Usuarios" })
export class Usuario {
  constructor(
    id: number,
    nombre: string,
    apellido: string,
    nacimiento: Date,
    estado: string,
    cotizacion: Cotizacion[]
  ) {
    this.Id = id;
    this.Email = nombre;
    this.Usuario = apellido;
    this.Password = nacimiento;
    this.Estado = estado;
    this.Cotizacion = cotizacion;
  }

  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Email: string;

  @Column()
  Usuario: string;

  @Column()
  Password: Date;
  @Column()
  Estado: string;

  @OneToMany(() => Cotizacion, (cotizacionAgente) => cotizacionAgente.Usuario)
  Cotizacion: Cotizacion[];
}
