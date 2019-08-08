import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ShareProjectService } from './share-project.service';

@NgModule({
  imports: [
  ],
  providers: [
    ShareProjectService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core module is already provided!');
    }
  }
}
