import { PersonaDto } from '../../Domain/Dtos/PersonaDto';

export interface IPersonaRepository {
  findById(id: number): Promise<any | null>;
  all(): Promise<any[]>;
  store(entry: PersonaDto): Promise<any>;
  update(id: number, entry: PersonaDto): Promise<any>;
  remove(id: number): Promise<any>;
}