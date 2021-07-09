import { IDepartamentoRepository } from "../Infrastructure/Interfaces/IDepartamentoRepository";
import { DepartamentoDto } from '../Domain/Dtos/DepartamentoDto';

export class DepartamentoService  {
constructor(private readonly _departamentoRepository: IDepartamentoRepository) {}

  public async findById(id: number): Promise<any | null> {
    return await this._departamentoRepository.findById(id);
  }

  public async all(): Promise<any[]> {
    return await this._departamentoRepository.all();
  }

  public async store(entry: DepartamentoDto): Promise<any> {
    return await this._departamentoRepository.store(entry);
  }

  public async update(id: number, entry: DepartamentoDto): Promise<any> {
    return await this._departamentoRepository.update(id, entry);
  }

  public async remove(id: number): Promise<any> {
    return await this._departamentoRepository.remove(id);
  }
}
