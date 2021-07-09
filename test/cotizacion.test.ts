import request from "supertest";
import { expect } from "chai";
import { app } from "../src/app";

describe("Cotizacion CRUD", () => {
  let id = "";
  let testObject = {
    Ingresos: 20000,
    Precio: 100000,
    Fecha: "2021-07-09",
    Estado: "Activo",
    vehiculoId: 1,
    clienteId: 1,
    usuarioId: 1
  };
  it("should post Cotizacion", async function () {
    const res = await request(app)
      .post("/api/cotizaciones")
      .set("Content-Type", "application/json")
      .send(testObject);
    expect(res.status).to.equal(200);
    expect(res.body.data.identifiers[0]).not.empty;
    id = res.body.data.identifiers[0].Id;
  });
  it("should getAll Cotizacion", async function () {
    const res = await request(app).get("/api/cotizaciones");
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should getById Cotizacion", async function () {
    const res = await request(app).get("/api/cotizaciones/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should Update Cotizacion", async function () {
    const res = await request(app)
      .put("/api/cotizaciones/" + id)
      .set("Content-Type", "application/json")
      .send({
        Nombre: "Dep Test Updated",
        Estado: "Activo",
      });
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should deleteById Cotizacion", async function () {
    const res = await request(app).delete("/api/cotizaciones/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
});
