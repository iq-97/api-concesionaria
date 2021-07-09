import { getConnection } from "typeorm";
import { ILocalizadorRepository } from "../Interfaces/ILocalizadorRepository";
import { Localizador } from "../../Domain/Entities/Localizador";
import { LocalizadorDto } from "../../Domain/Dtos/LocalizadorDto";

export class LocalizadorRepository implements ILocalizadorRepository {
  public async findById(id: number): Promise<any | null> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Localizadores")
      .from(Localizador, "TB_Localizadores")
      .where("TB_Localizadores.Id = :id", { id: id })
      .getOne();
  }

  public async all(): Promise<any[]> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Localizadores")
      .from(Localizador, "TB_Localizadores")
      .getRawMany(); // depend on what you need really
  }

  public async store(entry: LocalizadorDto): Promise<any> {
    let persona = { Id: entry.personaId };
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Localizador)
      .values([
        {
          Localizador: entry.Localizador,
          Tipo: entry.Tipo,
          Estado: entry.Estado,
          Persona: persona,
        },
      ])
      .execute();
  }

  public async update(id: number, entry: LocalizadorDto): Promise<any> {
    let persona = { Id: entry.personaId };
    return await getConnection()
      .createQueryBuilder()
      .update(Localizador)
      .set({
        Localizador: entry.Localizador,
        Tipo: entry.Tipo,
        Estado: entry.Estado,
        Persona: persona,
      })
      .where("id = :id", { id: id })
      .execute();
  }

  public async remove(id: number): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Localizador)
      .where("id = :id", { id: id })
      .execute();
  }
}
