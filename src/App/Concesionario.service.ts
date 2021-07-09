import { IConcesionarioRepository } from "../Infrastructure/Interfaces/IConcesionarioRepository";
import { ConcesionarioDto } from '../Domain/Dtos/ConcesionarioDto';

export class ConcesionarioService  {
constructor(private readonly _concesionarioRepository: IConcesionarioRepository) {}

  public async findById(id: number): Promise<any | null> {
    return await this._concesionarioRepository.findById(id);
  }

  public async all(): Promise<any[]> {
    return await this._concesionarioRepository.all();
  }

  public async store(entry: ConcesionarioDto): Promise<any> {
    return await this._concesionarioRepository.store(entry);
  }

  public async update(id: number, entry: ConcesionarioDto): Promise<any> {
    return await this._concesionarioRepository.update(id, entry);
  }

  public async remove(id: number): Promise<any> {
    return await this._concesionarioRepository.remove(id);
  }
}
