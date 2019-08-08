import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';
import { ShareProjectService } from 'src/app/core/share-project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.sass']
})
export class ProjectsListComponent implements OnInit {
  public projects: any;

  constructor(
    private readonly shareProjectService: ShareProjectService,
  ) { }

  ngOnInit() {
    this.projects = data.projects;
  }

  public shareData(project: any) {
    this.shareProjectService.project$ = project;
  }

}
