import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailedViewComponent } from './projects-detailed-view/projects-detailed-view.component';

const routes: Routes = [
  { path: '', component: ProjectsListComponent, pathMatch: 'full' },
  { path: ':id', component: ProjectsDetailedViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
