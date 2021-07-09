import { getConnection } from "typeorm";
import { IReporteRepository } from "../Interfaces/IReporteRepository";
import { Persona } from "../../Domain/Entities/Persona";
import { ReporteDto } from "../../Domain/Dtos/ReporteDto";

export class ReporteRepository implements IReporteRepository {
  public async rptCotizaciones(entry: ReporteDto): Promise<any[]> {
    return await getConnection()
      .createQueryBuilder("TB_Cotizaciones", "ct")
      .innerJoinAndSelect("ct.Vehiculo", "ve")
      .innerJoinAndSelect("ct.Usuario", "us")
      .innerJoinAndSelect("ct.Cliente", "cl")
      .where(
        "date(ct.Fecha) between date(ifnull(:fechaInicio, ct.Fecha)) and date(ifnull(:fechaFin, ct.Fecha)) ",
        { fechaInicio: entry.FechaInicio, fechaFin: entry.FechaFin }
      )
      .getMany();
  }
}
