import { ICotizacionRepository } from "../Infrastructure/Interfaces/ICotizacionRepository";
import { CotizacionDto } from '../Domain/Dtos/CotizacionDto';

export class CotizacionService  {
constructor(private readonly _cotizacionRepository: ICotizacionRepository) {}

  public async findById(id: number): Promise<any | null> {
    return await this._cotizacionRepository.findById(id);
  }

  public async all(): Promise<any[]> {
    return await this._cotizacionRepository.all();
  }

  public async store(entry: CotizacionDto): Promise<any> {
    return await this._cotizacionRepository.store(entry);
  }

  public async update(id: number, entry: CotizacionDto): Promise<any> {
    return await this._cotizacionRepository.update(id, entry);
  }

  public async remove(id: number): Promise<any> {
    return await this._cotizacionRepository.remove(id);
  }
}
