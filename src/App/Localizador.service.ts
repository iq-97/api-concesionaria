import { ILocalizadorRepository } from "../Infrastructure/Interfaces/ILocalizadorRepository";
import { LocalizadorDto } from '../Domain/Dtos/LocalizadorDto';

export class LocalizadorService  {
constructor(private readonly _localizadorRepository: ILocalizadorRepository) {}

  public async findById(id: number): Promise<any | null> {
    return await this._localizadorRepository.findById(id);
  }

  public async all(): Promise<any[]> {
    return await this._localizadorRepository.all();
  }

  public async store(entry: LocalizadorDto): Promise<any> {
    return await this._localizadorRepository.store(entry);
  }

  public async update(id: number, entry: LocalizadorDto): Promise<any> {
    return await this._localizadorRepository.update(id, entry);
  }

  public async remove(id: number): Promise<any> {
    return await this._localizadorRepository.remove(id);
  }
}
