import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { StarterTemplateComponent } from './layout/starter-template/starter-template.component';
import { FormularioComponent } from './layout/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './layout/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StarterTemplateComponent,
    FormularioComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
