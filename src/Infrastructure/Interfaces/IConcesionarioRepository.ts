import { ConcesionarioDto } from '../../Domain/Dtos/ConcesionarioDto';

export interface IConcesionarioRepository {
  findById(id: number): Promise<any | null>;
  all(): Promise<any[]>;
  store(entry: ConcesionarioDto): Promise<any>;
  update(id: number, entry: ConcesionarioDto): Promise<any>;
  remove(id: number): Promise<any>;
}