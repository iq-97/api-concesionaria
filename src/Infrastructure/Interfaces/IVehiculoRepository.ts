import { VehiculoDto } from '../../Domain/Dtos/VehiculoDto';

export interface IVehiculoRepository {
  findById(id: number): Promise<any | null>;
  all(): Promise<any[]>;
  store(entry: VehiculoDto): Promise<any>;
  update(id: number, entry: VehiculoDto): Promise<any>;
  remove(id: number): Promise<any>;
}