import { ReporteDto } from "../../Domain/Dtos/ReporteDto";

export interface IReporteRepository {
  rptCotizaciones(entry: ReporteDto): Promise<any[]>;
}
