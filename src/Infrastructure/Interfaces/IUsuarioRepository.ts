import { UsuarioDto } from '../../Domain/Dtos/UsuarioDto';

export interface IUsuarioRepository {
  findById(id: number): Promise<any | null>;
  all(): Promise<any[]>;
  store(entry: UsuarioDto): Promise<any>;
  update(id: number, entry: UsuarioDto): Promise<any>;
  remove(id: number): Promise<any>;
}