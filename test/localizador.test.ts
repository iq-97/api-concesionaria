import request from "supertest";
import { expect } from "chai";
import { app } from "../src/app";

describe("Localizador CRUD", () => {
  let id = "";
  let testObject = {
    Localizador: "prueba@email.com",
    Tipo: "Email",
    Estado: "Activo",
    personaId: 1,
  };
  it("should post Localizador", async function () {
    const res = await request(app)
      .post("/api/localizadores")
      .set("Content-Type", "application/json")
      .send(testObject);
    expect(res.status).to.equal(200);
    expect(res.body.data.identifiers[0]).not.empty;
    id = res.body.data.identifiers[0].Id;
  });
  it("should getAll Localizador", async function () {
    const res = await request(app).get("/api/localizadores");
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should getById Localizador", async function () {
    const res = await request(app).get("/api/localizadores/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should Update Localizador", async function () {
    const res = await request(app)
      .put("/api/localizadores/" + id)
      .set("Content-Type", "application/json")
      .send({
        Localizador: "prueba@updated.com",
        Tipo: "Email",
        Estado: "Activo",
        personaId: 1,
      });
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should deleteById Localizador", async function () {
    const res = await request(app).delete("/api/localizadores/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
});
