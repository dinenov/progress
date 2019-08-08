import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDetailedViewComponent } from './projects-detailed-view.component';

describe('ProjectsDetailedViewComponent', () => {
  let component: ProjectsDetailedViewComponent;
  let fixture: ComponentFixture<ProjectsDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
