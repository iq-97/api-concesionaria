import express = require("express");
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { MunicipioService } from "./App/Municipio.service";
import { MunicipioRepository } from "./Infrastructure/Repositories/MunicipioRepository";

export default (app: express.Application): void => {
  const container = createContainer({
    injectionMode: "CLASSIC",
  });

  container.register({
    // repositories
    _municipioRepository: asClass(MunicipioRepository).scoped(),

    // services
    _municipioService: asClass(MunicipioService).scoped(),
  });

  app.use(scopePerRequest(container));
};
