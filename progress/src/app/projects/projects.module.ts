import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailedViewComponent } from './projects-detailed-view/projects-detailed-view.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectsDetailedViewComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule,
  ]
})
export class ProjectsModule { }
