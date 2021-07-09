import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Persona } from "./Persona";
import { Usuario } from "./Usuario";
import { Vehiculo } from "./Vehiculo";

@Entity({ name: "TB_Cotizaciones" })
export class Cotizacion {
  constructor(
    id: number,
    ingresos: number,
    precio: number,
    fecha: Date,
    estado: string,
    vehiculo: Vehiculo,
    cliente: Persona,
    usuario: Usuario
  ) {
    this.Id = id;
    this.Ingresos = ingresos;
    this.Precio = precio;
    this.Fecha = fecha;
    this.Estado = estado;
    this.Vehiculo = vehiculo;
    this.Cliente = cliente;
    this.Usuario = usuario;
  }

  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Ingresos: number;

  @Column()
  Precio: number;

  @Column()
  Fecha: Date;

  @Column()
  Estado: string;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.Cotizacion)
  Vehiculo: Vehiculo;

  @ManyToOne(() => Persona, (cliente) => cliente.Cotizacion)
  Cliente: Persona;

  @ManyToOne(() => Usuario, (usuario) => usuario.Cotizacion)
  Usuario: Usuario;
}
