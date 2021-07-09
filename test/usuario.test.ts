import request from "supertest";
import { expect } from "chai";
import { app } from "../src/app";

describe("Usuario CRUD", () => {
  let id = "";
  let testObject = {
    Email: "Dep Test",
    Usuario: "user test",
    Estado: "Activo",
    Password: "123",
  };
  it("should post Usuario", async function () {
    const res = await request(app)
      .post("/api/usuarios")
      .set("Content-Type", "application/json")
      .send(testObject);
    expect(res.status).to.equal(200);
    expect(res.body.data.identifiers[0]).not.empty;
    id = res.body.data.identifiers[0].Id;
  });
  it("should getAll Usuario", async function () {
    const res = await request(app).get("/api/usuarios");
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should getById Usuario", async function () {
    const res = await request(app).get("/api/usuarios/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should Update Usuario", async function () {
    const res = await request(app)
      .put("/api/usuarios/" + id)
      .set("Content-Type", "application/json")
      .send({
        Email: "Dep Test updated",
        Usuario: "user test",
        Estado: "Activo",
        Password: "123",
      });
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should deleteById Usuario", async function () {
    const res = await request(app).delete("/api/usuarios/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
});
