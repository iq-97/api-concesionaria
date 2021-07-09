import { getConnection } from "typeorm";
import { IPersonaRepository } from "../Interfaces/IPersonaRepository";
import { Persona } from "../../Domain/Entities/Persona";
import { PersonaDto } from "../../Domain/Dtos/PersonaDto";

export class PersonaRepository implements IPersonaRepository {
  public async findById(id: number): Promise<any | null> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Personas")
      .from(Persona, "TB_Personas")
      .where("TB_Personas.Id = :id", { id: id })
      .getOne();
  }

  public async all(): Promise<any[]> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Personas")
      .from(Persona, "TB_Personas")
      .getRawMany(); // depend on what you need really
  }

  public async store(entry: PersonaDto): Promise<any> {
    let municipio = { Id: entry.municipioId };
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Persona)
      .values([
        {
          Nombres: entry.Nombres,
          Apellidos: entry.Apellidos,
          Nacimiento: entry.Nacimiento,
          Estado: entry.Estado,
          Municipio: municipio,
        },
      ])
      .execute();
  }

  public async update(id: number, entry: PersonaDto): Promise<any> {
    let municipio = { Id: entry.municipioId };
    return await getConnection()
      .createQueryBuilder()
      .update(Persona)
      .set({
        Nombres: entry.Nombres,
        Apellidos: entry.Apellidos,
        Nacimiento: entry.Nacimiento,
        Estado: entry.Estado,
        Municipio: municipio,
      })
      .where("id = :id", { id: id })
      .execute();
  }

  public async remove(id: number): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Persona)
      .where("id = :id", { id: id })
      .execute();
  }
}
