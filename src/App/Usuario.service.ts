import { IUsuarioRepository } from "../Infrastructure/Interfaces/IUsuarioRepository";
import { UsuarioDto } from '../Domain/Dtos/UsuarioDto';

export class UsuarioService  {
constructor(private readonly _usuarioRepository: IUsuarioRepository) {}

  public async findById(id: number): Promise<any | null> {
    return await this._usuarioRepository.findById(id);
  }

  public async all(): Promise<any[]> {
    return await this._usuarioRepository.all();
  }

  public async store(entry: UsuarioDto): Promise<any> {
    return await this._usuarioRepository.store(entry);
  }

  public async update(id: number, entry: UsuarioDto): Promise<any> {
    return await this._usuarioRepository.update(id, entry);
  }

  public async remove(id: number): Promise<any> {
    return await this._usuarioRepository.remove(id);
  }
}
