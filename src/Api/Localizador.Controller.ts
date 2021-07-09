import { Request, Response } from "express";
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import { LocalizadorDto } from "../Domain/Dtos/LocalizadorDto";
import { BaseController } from "./Base.Controller";
import { LocalizadorService } from "../App/Localizador.service";

@route("/api/localizadores")
export class RegisterController extends BaseController {
  constructor(private readonly _localizadorService: LocalizadorService) {
    super();
  }

  @GET()
  async GetAll(req: Request, res: Response) {
    try {
      const result = await this._localizadorService.all();
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
      const result = await this._localizadorService.store({
        Localizador: req.body.Localizador,
        Tipo: req.body.Tipo,
        Estado: req.body.Estado,
        personaId: req.body.personaId,
      } as LocalizadorDto);
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
      const result = await this._localizadorService.findById(id);
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
      const result = await this._localizadorService.remove(id);
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
      const result = await this._localizadorService.update(id, {
        Localizador: req.body.Localizador,
        Tipo: req.body.Tipo,
        Estado: req.body.Estado,
        personaId: req.body.personaId,
      } as LocalizadorDto);
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
