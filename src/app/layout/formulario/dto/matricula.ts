import { Curso } from './curso';
export interface Matricula {
  cycle: string;
  courses: Array<Curso>;
}
