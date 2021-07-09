import { getConnection } from "typeorm";
import { ICotizacionRepository } from "../Interfaces/ICotizacionRepository";
import { Cotizacion } from "../../Domain/Entities/Cotizacion";
import { CotizacionDto } from "../../Domain/Dtos/CotizacionDto";

export class CotizacionRepository implements ICotizacionRepository {
  public async findById(id: number): Promise<any | null> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Cotizaciones")
      .from(Cotizacion, "TB_Cotizaciones")
      .where("TB_Cotizaciones.Id = :id", { id: id })
      .getOne();
  }

  public async all(): Promise<any[]> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Cotizaciones")
      .from(Cotizacion, "TB_Cotizaciones")
      .getRawMany(); // depend on what you need really
  }

  public async store(entry: CotizacionDto): Promise<any> {
    let vehiculo = { Id: entry.vehiculoId };
    let usuario = { Id: entry.usuarioId };
    let cliente = { Id: entry.clienteId };
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Cotizacion)
      .values([
        {
          Ingresos: entry.Ingresos,
          Precio: entry.Precio,
          Fecha: entry.Fecha,
          Estado: entry.Estado,
          Vehiculo: vehiculo,
          Usuario: usuario,
          Cliente: cliente,
        },
      ])
      .execute();
  }

  public async update(id: number, entry: CotizacionDto): Promise<any> {
    let vehiculo = { Id: entry.vehiculoId };
    let usuario = { Id: entry.usuarioId };
    let cliente = { Id: entry.clienteId };
    return await getConnection()
      .createQueryBuilder()
      .update(Cotizacion)
      .set({
        Ingresos: entry.Ingresos,
        Precio: entry.Precio,
        Fecha: entry.Fecha,
        Estado: entry.Estado,
        Vehiculo: vehiculo,
        Usuario: usuario,
        Cliente: cliente,
      })
      .where("id = :id", { id: id })
      .execute();
  }

  public async remove(id: number): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Cotizacion)
      .where("id = :id", { id: id })
      .execute();
  }
}
