import request from "supertest";
import { expect } from "chai";
import { app } from "../src/app";

describe("Vehiculo CRUD", () => {
  let id = "";
  let testObject = {
    Marca: "Marca test",
    Anio: "2000",
    Puertas: 4,
    Traccion: "doble",
    Tipo: "Pickup",
    concesionarioId: 1,
  };
  it("should post Vehiculo", async function () {
    const res = await request(app)
      .post("/api/vehiculos")
      .set("Content-Type", "application/json")
      .send(testObject);
    expect(res.status).to.equal(200);
    expect(res.body.data.identifiers[0]).not.empty;
    id = res.body.data.identifiers[0].Id;
  });
  it("should getAll Vehiculo", async function () {
    const res = await request(app).get("/api/vehiculos");
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should getById Vehiculo", async function () {
    const res = await request(app).get("/api/vehiculos/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should Update Vehiculo", async function () {
    const res = await request(app)
      .put("/api/vehiculos/" + id)
      .set("Content-Type", "application/json")
      .send({
        Marca: "Marca test Updated",
        Anio: "2000",
        Puertas: 4,
        Traccion: "doble",
        Tipo: "Pickup",
        concesionarioId: 1,
      });
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
  it("should deleteById Vehiculo", async function () {
    const res = await request(app).delete("/api/vehiculos/" + id);
    expect(res.status).to.equal(200);
    expect(res.body.message).not.empty;
  });
});
