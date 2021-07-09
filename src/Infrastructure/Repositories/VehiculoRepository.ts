import { getConnection } from "typeorm";
import { IVehiculoRepository } from "../Interfaces/IVehiculoRepository";
import { Vehiculo } from "../../Domain/Entities/Vehiculo";
import { VehiculoDto } from "../../Domain/Dtos/VehiculoDto";

export class VehiculoRepository implements IVehiculoRepository {
  public async findById(id: number): Promise<any | null> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Vehiculos")
      .from(Vehiculo, "TB_Vehiculos")
      .where("TB_Vehiculos.Id = :id", { id: id })
      .getOne();
  }

  public async all(): Promise<any[]> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Vehiculos")
      .from(Vehiculo, "TB_Vehiculos")
      .getRawMany(); // depend on what you need really
  }

  public async store(entry: VehiculoDto): Promise<any> {
    let concesionario = { Id: entry.concesionarioId };
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Vehiculo)
      .values([
        {
          Marca: entry.Marca,
          Anio: entry.Anio,
          Puertas: entry.Puertas,
          Traccion: entry.Traccion,
          Tipo: entry.Tipo,
          Estado: entry.Estado,
          Concesionario: concesionario,
        },
      ])
      .execute();
  }

  public async update(id: number, entry: VehiculoDto): Promise<any> {
    let concesionario = { Id: entry.concesionarioId };
    return await getConnection()
      .createQueryBuilder()
      .update(Vehiculo)
      .set({
        Marca: entry.Marca,
        Anio: entry.Anio,
        Puertas: entry.Puertas,
        Traccion: entry.Traccion,
        Tipo: entry.Tipo,
        Estado: entry.Estado,
        Concesionario: concesionario,
      })
      .where("id = :id", { id: id })
      .execute();
  }

  public async remove(id: number): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Vehiculo)
      .where("id = :id", { id: id })
      .execute();
  }
}
