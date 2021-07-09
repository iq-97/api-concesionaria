import { Request, Response } from "express";
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import { UsuarioDto } from "../Domain/Dtos/UsuarioDto";
import { BaseController } from "./Base.Controller";
import { UsuarioService } from "../App/Usuario.service";

@route("/api/usuarios")
export class RegisterController extends BaseController {
  constructor(private readonly _usuarioService: UsuarioService) {
    super();
  }

  @GET()
  async GetAll(req: Request, res: Response) {
    try {
      const result = await this._usuarioService.all();
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
      const result = await this._usuarioService.store({
        Email: req.body.Email,
        Usuario: req.body.Usuario,
        Password: req.body.Password,
        Estado: req.body.Estado,
      } as UsuarioDto);
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
      const result = await this._usuarioService.findById(id);
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
      const result = await this._usuarioService.remove(id);
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
      const result = await this._usuarioService.update(id, {
        Email: req.body.Email,
        Usuario: req.body.Usuario,
        Password: req.body.Password,
        Estado: req.body.Estado,
      } as UsuarioDto);
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
