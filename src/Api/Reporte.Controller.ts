import { Request, Response } from "express";
import { route, POST } from "awilix-express";
import { BaseController } from "./Base.Controller";
import { ReporteService } from "../App/Reporte.service";
import { ReporteDto } from "../Domain/Dtos/ReporteDto";

@route("/api/reportes")
export class RegisterController extends BaseController {
  constructor(private readonly _reporteService: ReporteService) {
    super();
  }
  @route("/cotizaciones")
  @POST()
  async Create(req: Request, res: Response) {
    try {
      const result = await this._reporteService.allCotizaciones({
        FechaInicio: req.body.FechaInicio,
        FechaFin: req.body.FechaFin,
      } as ReporteDto);
      res
        .status(200)
        .send({ data: result, message: "Rows obtained successfully" });
    } catch (error) {
      this.handleException(error, res);
    }
  }
}
