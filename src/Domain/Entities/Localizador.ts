import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Persona } from "./Persona";

@Entity({ name: "TB_Localizadores" })
export class Localizador {
  constructor(
    id: number,
    localizador: string,
    tipo: string,
    estado: string,
    persona: Persona
  ) {
    this.Id = id;
    this.Localizador = localizador;
    this.Estado = estado;
    this.Tipo = tipo;
    this.Persona = persona;
  }

  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Localizador: string;

  @Column()
  Tipo: string;

  @Column()
  Estado: string;

  @ManyToOne(() => Persona, (persona) => persona.Localizador)
  Persona: Persona;
}
