import { Request, Response } from "express";
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import { PersonaDto } from "../Domain/Dtos/PersonaDto";
import { BaseController } from "./Base.Controller";
import { PersonaService } from "../App/Persona.service";

@route("/api/personas")
export class RegisterController extends BaseController {
  constructor(private readonly _personaService: PersonaService) {
    super();
  }

  @GET()
  async GetAll(req: Request, res: Response) {
    try {
      const result = await this._personaService.all();
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
      const result = await this._personaService.store({
        Nombres: req.body.Nombres,
        Apellidos: req.body.Apellidos,
        Nacimiento: req.body.Nacimiento,
        Estado: req.body.Estado,
        municipioId: req.body.municipioId,
      } as PersonaDto);
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
      const result = await this._personaService.findById(id);
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
      const result = await this._personaService.remove(id);
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
      const result = await this._personaService.update(id, {
        Nombres: req.body.Nombres,
        Apellidos: req.body.Apellidos,
        Nacimiento: req.body.Nacimiento,
        Estado: req.body.Estado,
        municipioId: req.body.municipioId,
      } as PersonaDto);
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
