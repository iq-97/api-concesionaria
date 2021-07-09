import { IPersonaRepository } from "../Infrastructure/Interfaces/IPersonaRepository";
import { PersonaDto } from '../Domain/Dtos/PersonaDto';

export class PersonaService  {
constructor(private readonly _personaRepository: IPersonaRepository) {}

  public async findById(id: number): Promise<any | null> {
    return await this._personaRepository.findById(id);
  }

  public async all(): Promise<any[]> {
    return await this._personaRepository.all();
  }

  public async store(entry: PersonaDto): Promise<any> {
    return await this._personaRepository.store(entry);
  }

  public async update(id: number, entry: PersonaDto): Promise<any> {
    return await this._personaRepository.update(id, entry);
  }

  public async remove(id: number): Promise<any> {
    return await this._personaRepository.remove(id);
  }
}
