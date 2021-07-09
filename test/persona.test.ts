import request from "supertest";
import { expect } from "chai";
import { app } from "../src/app";

describe("Persona CRUD", () => {
  let id = "";
  let testObject = {
    Nombres: "Nombre Test",
    Apellidos: "Apellido test",
    Nacimiento: "1989-11-11",
    Estado: "Activo",
    municipioId: 1,
  };
  it("should post Persona", async function () {
    const res = await request(app)
      .post("/api/personas")
      .set("Content-Type", "application/json")
      .send(testObject);
    expect(res.status).to.equal(200);
    expect(res.body.data.identifiers[0]).not.empty;
    id = res.body.data.identifiers[0].Id;
  });
  it("should getAll Persona", async function () {
    const res = await request(app).get("/api/personas");
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should getById Persona", async function () {
    const res = await request(app).get("/api/personas/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should Update Persona", async function () {
    const res = await request(app)
      .put("/api/personas/" + id)
      .set("Content-Type", "application/json")
      .send({
        Nombres: "Nombre Test Updated",
        Apellidos: "Apellido test",
        Nacimiento: "1989-11-11",
        Estado: "Activo",
        municipioId: 1
      });
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should deleteById Persona", async function () {
    const res = await request(app).delete("/api/personas/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
});
