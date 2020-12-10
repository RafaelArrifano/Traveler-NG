import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { NotaListComponent } from './nota/nota-list/nota-list.component';

const routes: Routes = [
  {path:'nota', component: NotaListComponent}
const routes: Routes = [
  { path: 'usuario', component: UsuarioListComponent },
//  { path: 'usuario/novo', component: UsuarioFormComponent },
//  { path: 'usuario/:id', component: UsuarioFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
