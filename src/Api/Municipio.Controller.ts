import { Request, Response } from "express";
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import { MunicipioDto } from "../Domain/Dtos/MunicipioDto";
import { BaseController } from "../Api/Base.Controller";
import { MunicipioService } from "../App/Municipio.service";

@route('/municipios')
export class RegisterController extends BaseController {
  constructor(private readonly _municipioService: MunicipioService) {
    super();
  }

  @GET()
  async GetAll(req: Request, res: Response) {
    try {
      const result=await this._municipioService.all();
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
      const result = await this._municipioService.store({
        Nombre: req.body.Nombre,
        Estado: req.body.Estado
      } as MunicipioDto);
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
      const result = await this._municipioService.findById(id);
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
      const result = await this._municipioService.remove(id);
      if (result) {
        res.status(200).send({ data: null,message:"Register deleted successfully"});
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
      const result = await this._municipioService.update(id, {
        Nombre: req.body.Nombre,
        Estado: req.body.Estado
      } as MunicipioDto);
      if (result) {
        res.status(200).send({ data: null,message:"Register updated successfully"});
      } else {
        res.status(404).send({ data: null,message:"Register not found"});
      }
    } catch (error) {
      this.handleException(error, res);
    }
  }
}
