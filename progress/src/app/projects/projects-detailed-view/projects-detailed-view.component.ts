import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ShareProjectService } from 'src/app/core/share-project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-detailed-view',
  templateUrl: './projects-detailed-view.component.html',
  styleUrls: ['./projects-detailed-view.component.sass']
})
export class ProjectsDetailedViewComponent implements OnInit, OnDestroy {
  private projectSubscription: Subscription;
  public project: any = '';

  constructor(
    private readonly shareProjectService: ShareProjectService,
    private readonly router: Router,
    private readonly location: Location
  ) { }

  ngOnInit() {
    this.projectSubscription = this.shareProjectService.project$.subscribe(
      (project: any) => {
        if (project) {
          this.project = project;
        } else {
          this.router.navigate(['']);
        }
      }
    );
  }

  back() {
    this.location.back();
  }

  ngOnDestroy() {
    if (this.projectSubscription) {
      this.projectSubscription.unsubscribe();
    }
  }

}
