import express = require("express");
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { MunicipioService } from "./App/Municipio.service";
import { MunicipioRepository } from "./Infrastructure/Repositories/MunicipioRepository";
import { CotizacionRepository } from "./Infrastructure/Repositories/CotizacionRepository";
import { DepartamentoRepository } from "./Infrastructure/Repositories/DepartamentoRepository";
import { LocalizadorRepository } from "./Infrastructure/Repositories/LocalizadorRepository";
import { PersonaRepository } from "./Infrastructure/Repositories/PersonaRepository";
import { UsuarioRepository } from "./Infrastructure/Repositories/UsuarioRepository";
import { VehiculoRepository } from "./Infrastructure/Repositories/VehiculoRepository";
import { ConcesionarioService } from "./App/Concesionario.service";
import { CotizacionService } from "./App/Cotizacion.service";
import { DepartamentoService } from "./App/Departamento.service";
import { LocalizadorService } from "./App/Localizador.service";
import { PersonaService } from "./App/Persona.service";
import { UsuarioService } from "./App/Usuario.service";
import { VehiculoService } from "./App/Vehiculo.service";
import { ConcesionarioRepository } from "./Infrastructure/Repositories/ConcesionarioRepository";

export default (app: express.Application): void => {
  const container = createContainer({
    injectionMode: "CLASSIC",
  });

  container.register({
    // repositories
    _concesionarioRepository: asClass(ConcesionarioRepository).scoped(),
    _cotizacionRepository: asClass(CotizacionRepository).scoped(),
    _departamentoRepository: asClass(DepartamentoRepository).scoped(),
    _localizadorRepository: asClass(LocalizadorRepository).scoped(),
    _municipioRepository: asClass(MunicipioRepository).scoped(),
    _personaRepository: asClass(PersonaRepository).scoped(),
    _usuarioRepository: asClass(UsuarioRepository).scoped(),
    _vehiculoRepository: asClass(VehiculoRepository).scoped(),

    // services
    _concesionarioService: asClass(ConcesionarioService).scoped(),
    _cotizacionService: asClass(CotizacionService).scoped(),
    _departamentoService: asClass(DepartamentoService).scoped(),
    _localizadorService: asClass(LocalizadorService).scoped(),
    _municipioService: asClass(MunicipioService).scoped(),
    _personaService: asClass(PersonaService).scoped(),
    _usuarioService: asClass(UsuarioService).scoped(),
    _vehiculoService: asClass(VehiculoService).scoped(),
  });

  app.use(scopePerRequest(container));
};
