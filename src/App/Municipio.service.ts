import { IMunicipioRepository } from "../Infrastructure/Interfaces/IMunicipioRepository";
import { MunicipioDto } from '../Domain/Dtos/MunicipioDto';

export class MunicipioService  {
constructor(private readonly _municipioRepository: IMunicipioRepository) {}

  public async findById(id: number): Promise<any | null> {
    return await this._municipioRepository.findById(id);
  }

  public async all(): Promise<any[]> {
    return await this._municipioRepository.all();
  }

  public async store(entry: MunicipioDto): Promise<any> {
    return await this._municipioRepository.store(entry);
  }

  public async update(id: number, entry: MunicipioDto): Promise<any> {
    return await this._municipioRepository.update(id, entry);
  }

  public async remove(id: number): Promise<any> {
    return await this._municipioRepository.remove(id);
  }
}
