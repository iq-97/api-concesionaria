import { DepartamentoDto } from '../../Domain/Dtos/DepartamentoDto';

export interface IDepartamentoRepository {
  findById(id: number): Promise<any | null>;
  all(): Promise<any[]>;
  store(entry: DepartamentoDto): Promise<any>;
  update(id: number, entry: DepartamentoDto): Promise<any>;
  remove(id: number): Promise<any>;
}