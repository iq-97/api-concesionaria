import { LocalizadorDto } from '../../Domain/Dtos/LocalizadorDto';

export interface ILocalizadorRepository {
  findById(id: number): Promise<any | null>;
  all(): Promise<any[]>;
  store(entry: LocalizadorDto): Promise<any>;
  update(id: number, entry: LocalizadorDto): Promise<any>;
  remove(id: number): Promise<any>;
}