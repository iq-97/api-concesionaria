import { getConnection } from "typeorm";
import { IMunicipioRepository } from "../Interfaces/IMunicipioRepository";
import { Municipio } from "../../Domain/Entities/Municipio";
import { MunicipioDto } from "../../Domain/Dtos/MunicipioDto";

export class MunicipioRepository implements IMunicipioRepository {
  public async findById(id: number): Promise<any | null> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Municipios")
      .from(Municipio, "TB_Municipios")
      .where("TB_Municipios.Id = :id", { id: id })
      .getOne();
  }

  public async all(): Promise<any[]> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Municipios")
      .from(Municipio, "TB_Municipios")
      .getRawMany(); // depend on what you need really
  }

  public async store(entry: MunicipioDto): Promise<any> {
    let departamento = { Id: entry.departamentoId };
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Municipio)
      .values([
        {
          Nombre: entry.Nombre,
          Estado: entry.Estado,
          Departamento: departamento,
        },
      ])
      .execute();
  }

  public async update(id: number, entry: MunicipioDto): Promise<any> {
    let departamento = { Id: entry.departamentoId };
    return await getConnection()
      .createQueryBuilder()
      .update(Municipio)
      .set({
        Nombre: entry.Nombre,
        Estado: entry.Estado,
        Departamento: departamento,
      })
      .where("TB_Municipios.Id = :id", { id: id })
      .execute();
  }

  public async remove(id: number): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Municipio)
      .where("TB_Municipios.Id = :id", { id: id })
      .execute();
  }
}
