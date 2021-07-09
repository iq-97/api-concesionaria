import { getConnection } from "typeorm";
import { IUsuarioRepository } from "../Interfaces/IUsuarioRepository";
import { Usuario } from "../../Domain/Entities/Usuario";
import { UsuarioDto } from "../../Domain/Dtos/UsuarioDto";

export class UsuarioRepository implements IUsuarioRepository {
  public async findById(id: number): Promise<any | null> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Usuarios")
      .from(Usuario, "TB_Usuarios")
      .where("TB_Usuarios.Id = :id", { id: id })
      .getOne();
  }

  public async all(): Promise<any[]> {
    return await getConnection()
      .createQueryBuilder()
      .select("TB_Usuarios")
      .from(Usuario, "TB_Usuarios")
      .getRawMany(); // depend on what you need really
  }

  public async store(entry: UsuarioDto): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Usuario)
      .values([
        {
          Email: entry.Email,
          Usuario: entry.Usuario,
          Password: entry.Password,
          Estado: entry.Estado
        },
      ])
      .execute();
  }

  public async update(id: number, entry: UsuarioDto): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .update(Usuario)
      .set({
        Email: entry.Email,
        Usuario: entry.Usuario,
        Password: entry.Password,       
        Estado: entry.Estado
      })
      .where("id = :id", { id: id })
      .execute();
  }

  public async remove(id: number): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Usuario)
      .where("id = :id", { id: id })
      .execute();
  }
}
