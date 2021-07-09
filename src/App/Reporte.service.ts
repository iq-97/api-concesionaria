import { ReporteDto } from "../Domain/Dtos/ReporteDto";
import { IReporteRepository } from "../Infrastructure/Interfaces/IReporteRepository";

export class ReporteService {
  constructor(private readonly _reporteRepository: IReporteRepository) {}

  public async allCotizaciones(entry: ReporteDto): Promise<any[]> {
    return await this._reporteRepository.rptCotizaciones(entry);
  }
}
