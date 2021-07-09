import { getConnection } from "typeorm";
import { IConcesionarioRepository } from "../Interfaces/IConcesionarioRepository";
import { Concesionario } from "../../Domain/Entities/Concesionario";
import { ConcesionarioDto } from "../../Domain/Dtos/ConcesionarioDto";

export class ConcesionarioRepository implements IConcesionarioRepository {
  public async findById(id: number): Promise<any | null> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Concesionarios")
      .from(Concesionario, "TB_Concesionarios")
      .where("TB_Concesionarios.Id = :id", { id: id })
      .getOne();
  }

  public async all(): Promise<any[]> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Concesionarios")
      .from(Concesionario, "TB_Concesionarios")
      .getRawMany(); // depend on what you need really
  }

  public async store(entry: ConcesionarioDto): Promise<any> {
    let municipio = { Id: entry.municipioId };
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Concesionario)
      .values([
        {
          Nombre: entry.Nombre,
          RazonSocial: entry.RazonSocial,
          Estado: entry.Estado,
          Municipio: municipio,
        },
      ])
      .execute();
  }

  public async update(id: number, entry: ConcesionarioDto): Promise<any> {
    let municipio = { Id: entry.municipioId };
    return await getConnection()
      .createQueryBuilder()
      .update(Concesionario)
      .set({
        Nombre: entry.Nombre,
        RazonSocial: entry.RazonSocial,
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
      .from(Concesionario)
      .where("id = :id", { id: id })
      .execute();
  }
}
