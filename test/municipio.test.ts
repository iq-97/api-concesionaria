import request from "supertest";
import { expect } from "chai";
import { app } from "../src/app";

describe("Municipio CRUD", () => {
  let id = "";
  let testObject = {
    Nombre: "Mun Test",
    Estado: "Activo",
    departamentoId: 1,
  };
  it("should post Municipio", async function () {
    const res = await request(app)
      .post("/api/municipios")
      .set("Content-Type", "application/json")
      .send(testObject);
    expect(res.status).to.equal(200);
    expect(res.body.data.identifiers[0]).not.empty;
    id = res.body.data.identifiers[0].Id;
  });
  it("should getAll Municipio", async function () {
    const res = await request(app).get("/api/municipios");
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should getById Municipio", async function () {
    const res = await request(app).get("/api/municipios/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should Update Municipio", async function () {
    const res = await request(app)
      .put("/api/municipios/" + id)
      .set("Content-Type", "application/json")
      .send({
        Nombre: "Mun Test updated",
        Estado: "Activo",
        departamentoId: 1,
      });
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should deleteById Municipio", async function () {
    const res = await request(app).delete("/api/municipios/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
});
