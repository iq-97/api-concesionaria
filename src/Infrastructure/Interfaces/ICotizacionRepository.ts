import { CotizacionDto } from '../../Domain/Dtos/CotizacionDto';

export interface ICotizacionRepository {
  findById(id: number): Promise<any | null>;
  all(): Promise<any[]>;
  store(entry: CotizacionDto): Promise<any>;
  update(id: number, entry: CotizacionDto): Promise<any>;
  remove(id: number): Promise<any>;
}