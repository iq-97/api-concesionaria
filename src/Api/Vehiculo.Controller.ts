import { Request, Response } from "express";
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import { VehiculoDto } from "../Domain/Dtos/VehiculoDto";
import { BaseController } from "./Base.Controller";
import { VehiculoService } from "../App/Vehiculo.service";

@route("/api/vehiculos")
export class RegisterController extends BaseController {
  constructor(private readonly _vehiculoService: VehiculoService) {
    super();
  }

  @GET()
  async GetAll(req: Request, res: Response) {
    try {
      const result = await this._vehiculoService.all();
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
      const result = await this._vehiculoService.store({
        Marca: req.body.Marca,
        Anio: req.body.Anio,
        Puertas: req.body.Puertas,
        Traccion: req.body.Traccion,
        Tipo: req.body.Tipo,
        Estado: req.body.Estado,
        concesionarioId: req.body.concesionarioId,
      } as VehiculoDto);
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
      const result = await this._vehiculoService.findById(id);
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
      const result = await this._vehiculoService.remove(id);
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
      const result = await this._vehiculoService.update(id, {
        Marca: req.body.Marca,
        Anio: req.body.Anio,
        Puertas: req.body.Puertas,
        Traccion: req.body.Traccion,
        Tipo: req.body.Tipo,
        Estado: req.body.Estado,
        concesionarioId: req.body.concesionarioId,
      } as VehiculoDto);
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
