import { IVehiculoRepository } from "../Infrastructure/Interfaces/IVehiculoRepository";
import { VehiculoDto } from '../Domain/Dtos/VehiculoDto';

export class VehiculoService  {
constructor(private readonly _vehiculoRepository: IVehiculoRepository) {}

  public async findById(id: number): Promise<any | null> {
    return await this._vehiculoRepository.findById(id);
  }

  public async all(): Promise<any[]> {
    return await this._vehiculoRepository.all();
  }

  public async store(entry: VehiculoDto): Promise<any> {
    return await this._vehiculoRepository.store(entry);
  }

  public async update(id: number, entry: VehiculoDto): Promise<any> {
    return await this._vehiculoRepository.update(id, entry);
  }

  public async remove(id: number): Promise<any> {
    return await this._vehiculoRepository.remove(id);
  }
}
