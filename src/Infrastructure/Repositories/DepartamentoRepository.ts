import { getConnection } from "typeorm";
import { IDepartamentoRepository } from "../Interfaces/IDepartamentoRepository";
import { Departamento } from "../../Domain/Entities/Departamento";
import { DepartamentoDto } from "../../Domain/Dtos/DepartamentoDto";

export class DepartamentoRepository implements IDepartamentoRepository {
  public async findById(id: number): Promise<any | null> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Departamentos")
      .from(Departamento, "TB_Departamentos")
      .where("TB_Departamentos.Id = :id", { id: id })
      .getOne();
  }

  public async all(): Promise<any[]> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Departamentos")
      .from(Departamento, "TB_Departamentos")
      .getRawMany(); // depend on what you need really
  }

  public async store(entry: DepartamentoDto): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Departamento)
      .values([{ Nombre: entry.Nombre, Estado: entry.Estado }])
      .execute();
  }

  public async update(id: number, entry: DepartamentoDto): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .update(Departamento)
      .set({
        Nombre: entry.Nombre,
        Estado: "Saw",
      })
      .where("id = :id", { id: id })
      .execute();
  }

  public async remove(id: number): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Departamento)
      .where("id = :id", { id: id })
      .execute();
  }
}
