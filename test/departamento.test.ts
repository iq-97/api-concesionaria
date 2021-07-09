import request from "supertest";
import { expect } from "chai";
import { app } from "../src/app";

describe("Departamento CRUD", () => {
  let id = "";
  let testObject = {
    Nombre: "Dep Test",
    Estado: "Activo",
  };
  it("should post Departamento", async function () {
    const res = await request(app)
      .post("/api/departamentos")
      .set("Content-Type", "application/json")
      .send(testObject);
    expect(res.status).to.equal(200);
    expect(res.body.data.identifiers[0]).not.empty;
    id = res.body.data.identifiers[0].Id;
  });
  it("should getAll Departamento", async function () {
    const res = await request(app).get("/api/departamentos");
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should getById Departamento", async function () {
    const res = await request(app).get("/api/departamentos/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should Update Departamento", async function () {
    const res = await request(app)
      .put("/api/departamentos/" + id)
      .set("Content-Type", "application/json")
      .send({
        Nombre: "Dep Test Updated",
        Estado: "Activo",
      });
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should deleteById Departamento", async function () {
    const res = await request(app).delete("/api/departamentos/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
});
