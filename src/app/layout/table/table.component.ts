import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../formulario/dto/curso';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() clases:any;
  @Input() nombresCabecera:any;
  @Input() nombresDetalles:any;
  @Input() editar?:boolean;
  @Input() curso?:any;

  constructor() { }

  ngOnInit() {}

}
