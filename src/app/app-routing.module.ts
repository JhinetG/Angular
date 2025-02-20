import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CcourseComponent } from './ccourse/ccourse.component';
import { CformComponent } from './cform/cform.component';
import { CcontadorComponent } from './ccontador/ccontador.component';


const routes: Routes = [
  { path: 'listcourse', component: CcourseComponent },
  { path: 'postcourse', component: CformComponent },
  { path: 'contact', component: CcourseComponent },
  { path: 'contador', component: CcontadorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
