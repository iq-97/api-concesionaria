import { MunicipioDto } from '../../Domain/Dtos/MunicipioDto';

export interface IMunicipioRepository {
  findById(id: number): Promise<any | null>;
  all(): Promise<any[]>;
  store(entry: MunicipioDto): Promise<any>;
  update(id: number, entry: MunicipioDto): Promise<any>;
  remove(id: number): Promise<any>;
}