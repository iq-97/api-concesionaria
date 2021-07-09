import { Request, Response } from "express";
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import { CotizacionDto } from "../Domain/Dtos/CotizacionDto";
import { BaseController } from "./Base.Controller";
import { CotizacionService } from "../App/Cotizacion.service";

@route("/api/cotizaciones")
export class RegisterController extends BaseController {
  constructor(private readonly _cotizacionService: CotizacionService) {
    super();
  }

  @GET()
  async GetAll(req: Request, res: Response) {
    try {
      const result = await this._cotizacionService.all();
      if (result)
        res
          .status(200)
          .json({
            data: result,
            message: "Registers query has been successfully",
          });
      else res.status(200).json({ data: result, message: "Registers Empty" });
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @POST()
  async Create(req: Request, res: Response) {
    try {
      const result = await this._cotizacionService.store({
        Ingresos: req.body.Ingresos,
        Precio: req.body.Precio,
        Fecha: req.body.Fecha,
        Estado: req.body.Estado,
        vehiculoId: req.body.vehiculoId,
        clienteId: req.body.clienteId,
        usuarioId: req.body.usuarioId,
      } as CotizacionDto);
      res
        .status(200)
        .send({ data: result, message: "Register created successfully" });
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @route("/:id")
  @GET()
  async GetxId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await this._cotizacionService.findById(id);
      if (result) {
        res
          .status(200)
          .send({ data: result, message: "Register geted successfully" });
      } else {
        res.status(404).send({ data: null, message: "Register not found" });
      }
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @route("/:id")
  @DELETE()
  async DeleteM(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await this._cotizacionService.remove(id);
      if (result.affected != 0) {
        res
          .status(200)
          .send({ data: result, message: "Register deleted successfully" });
      } else {
        res.status(404).send({ data: null, message: "Register not found" });
      }
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @route("/:id")
  @PUT()
  async UpdateM(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await this._cotizacionService.update(id, {
        Ingresos: req.body.Ingresos,
        Precio: req.body.Precio,
        Fecha: req.body.Fecha,
        Estado: req.body.Estado,
        vehiculoId: req.body.vehiculoId,
        clienteId: req.body.clienteId,
        usuarioId: req.body.usuarioId,
      } as CotizacionDto);
      if (result.affected != 0) {
        res
          .status(200)
          .send({ data: result, message: "Register updated successfully" });
      } else {
        res.status(404).send({ data: null, message: "Register not found" });
      }
    } catch (error) {
      this.handleException(error, res);
    }
  }
}
