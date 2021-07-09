import { Request, Response } from "express";
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import { DepartamentoDto } from "../Domain/Dtos/DepartamentoDto";
import { BaseController } from "./Base.Controller";
import { DepartamentoService } from "../App/Departamento.service";

@route('/api/departamentos')
export class RegisterController extends BaseController {
  constructor(private readonly _departamentoService: DepartamentoService) {
    super();
  }

  @GET()
  async GetAll(req: Request, res: Response) {
    try {
      const result=await this._departamentoService.all();
      if(result)
            res.status(200).json({data: result,message:"Registers query has been successfully"});
      else res.status(200).json({data: result,message:"Registers Empty"});
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @POST()
  async Create(req: Request, res: Response) {
    try {
      const result = await this._departamentoService.store({
        Nombre: req.body.Nombre,
        Estado: req.body.Estado
      } as DepartamentoDto);
      res.status(200).send({ data: result,message:"Register created successfully"});
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @route("/:id")
  @GET()
  async GetxId(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
      const result = await this._departamentoService.findById(id);
      if (result) {
        res.status(200).send({ data: result,message:"Register geted successfully"});
      } else {
        res.status(404).send({ data: null,message:"Register not found"});
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
      const result = await this._departamentoService.remove(id);
      if (result.affected != 0) {
        res.status(200).send({ data: result,message:"Register deleted successfully"});
      } else {
        res.status(404).send({ data: null,message:"Register not found"});
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
      const result = await this._departamentoService.update(id, {
        Nombre: req.body.Nombre,
        Estado: req.body.Estado
      } as DepartamentoDto);
      if (result.affected != 0) {
        res.status(200).send({ data: result,message:"Register updated successfully"});
      } else {
        res.status(404).send({ data: null,message:"Register not found"});
      }
    } catch (error) {
      this.handleException(error, res);
    }
  }
}
