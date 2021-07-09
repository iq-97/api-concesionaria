import request from "supertest";
import { expect } from "chai";
import { app } from "../src/app";

describe("Concesionario CRUD", () => {
  let id = "";
  let testObject = {
    Nombre: "concesionario test",
    RazonSocial: "prueba",
    Estado: "Activo",
    municipioId: 1,
  };
  it("should post Concesionario", async function () {
    const res = await request(app)
      .post("/api/concesionarios")
      .set("Content-Type", "application/json")
      .send(testObject);
    expect(res.status).to.equal(200);
    expect(res.body.data.identifiers[0]).not.empty;
    id = res.body.data.identifiers[0].Id;
  });
  it("should getAll Concesionario", async function () {
    const res = await request(app).get("/api/concesionarios");
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should getById Concesionario", async function () {
    const res = await request(app).get("/api/concesionarios/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should Update Concesionario", async function () {
    const res = await request(app)
      .put("/api/concesionarios/" + id)
      .set("Content-Type", "application/json")
      .send({
        Nombre: "concesionario test updated",
        RazonSocial: "prueba",
        Estado: "Activo",
        municipioId: 1,
      });
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should deleteById Concesionario", async function () {
    const res = await request(app).delete("/api/concesionarios/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
});
