import { Component, OnInit } from '@angular/core';
import { Clase } from './dto/clase';
import { Curso } from './dto/curso';
import { lista as listadoClases } from './data-samples/clases.json';
import { lista as listadoCursos } from './data-samples/cursos.json';
import { Matricula } from './dto/matricula';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  cursos: Curso[] = listadoCursos;
  clases: Clase[] = listadoClases;
  matricula: Matricula = {cycle: '2020-1', courses: this.cursos};

  // Nuevos elementos
  nuevoCurso: any = {};
  nuevaClase: any = {};
  clasesXcurso: Clase[] = [];

  // Para la tabla
  cabeceraTabla = ['#','Name','Description','Hours','CourseID','Options'];
  nombresDetalles = ['id', 'name', 'description', 'horas','idcurso',''];

  constructor() { }

  ngOnInit() {}

  agregarNuevoCurso() {
    this.cursos.push(this.nuevoCurso);
    this.nuevoCurso = {};
  }

  addToTable() {
    this.clases.push(this.nuevaClase);
    this.nuevaClase = {};
  }

  editarClase(clase: Clase) {
    console.log(clase);
  }

  editarCurso(curso: Curso) {
    console.log(curso);
  }
}
