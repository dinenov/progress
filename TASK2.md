Part 2.
You are assigned to provide a detailed answer to a client who is going to use Kendo UI for Angular for a first time. He wants to visualize the same data from Part 1 in his application. Investigate the client’s needs and write a response with a proposed solution for the case by using Kendo UI for Angular.
“Hello,
I am evaluating your Kendo UI for Angular product and I need your help.
We are building an application which visualizes a big amount of data from a JSON and enables:
1. filtering the data;
2. editing the data;
3. the data is displayed on pages; 5 data items per page;
How can we implement this with Kendo UI for Angular?
This should be really easy to achieve, and your documentation is clearly lacking! I’m sure others are encountering this scenario as well and you should really fix it.
Our purchase decision depends on me achieving the above.
Regards,
Eva”


## Answer

Dear Eva,

Thank you for considering Kendu UI for Angular!

For your project I recommend using Kendo UI grid. To install the needed dependencies, use the following command:
npm i @progress/kendo-angular-grid
or if you are using Angular 6+:
ng add @progress/kendo-angular-grid

You can read how to implement the Kendo UI grid here: https://www.telerik.com/kendo-angular-ui/components/grid/

You can read more about the filtering options here: https://www.telerik.com/kendo-angular-ui/components/grid/filtering/

For editing the data, you can read here: https://www.telerik.com/kendo-angular-ui/components/grid/editing/
The editing options depend on whether you are using reactive or template-driven forms.

And for paging the data, you can read more here: https://www.telerik.com/kendo-angular-ui/components/grid/paging/

Based on your tasks, you can use the following code sample for your project. It is based on template-driven Angular forms.

(app).component.html

```
<form novalidate #myForm="ngForm">
  <kendo-grid [data]="gridView" (edit)="editHandler($event)" (cancel)="cancelHandler($event)"
    (save)="saveHandler($event)" (add)="addHandler($event)" [sort]="state.sort" [filter]="state.filter"
    [sortable]="true" [filterable]="true" (dataStateChange)="dataStateChange($event)" [skip]="skip"
    [pageSize]="pageSize" [pageable]="true" [height]="400" (pageChange)="pageChange($event)">
    <kendo-grid-column field="title" title="Title" width="250">
      <ng-template kendoGridEditTemplate let-dataItem="dataItem">
        <input [(ngModel)]="dataItem.title" name="ProductName" class="k-textbox" required />
      </ng-template>
    </kendo-grid-column>
    <kendo-grid-column field="publish_date" title="Publish date" format='{0:MM/dd/yyyy HH:mm:ss}' width="150"
      filter="date">
    </kendo-grid-column>
    <kendo-grid-column field="location_city" title="Location" width="100" filter="text">
    </kendo-grid-column>
    <kendo-grid-column field="comments" title="Comments" width="80">
    </kendo-grid-column>
    <kendo-grid-command-column title="command" width="220">
      <ng-template kendoGridCellTemplate let-isNew="isNew">
        <!-- edit the command directive, will be visible when not in edit mode -->
        <button kendoGridEditCommand [primary]="true">Edit</button>
        <!-- save the command directive, will be visible when in edit mode -->
        <button kendoGridSaveCommand>Update</button>
        <!-- cancel the command directive, will be visible when in edit mode -->
        <button kendoGridCancelCommand>Cancel</button>
      </ng-template>
    </kendo-grid-command-column>
  </kendo-grid>
</form>
```

(app).component.ts
```
import { Component, OnInit } from '@angular/core';
import { data } from './data/data';
import { EditService } from './edit.service';
import { DataStateChangeEvent, PageChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public editedRowIndex;
  public editedProduct;
  public buttonCount = 5;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public previousNext = true;

  public gridView: GridDataResult;
  public pageSize = 5;
  public pageSizes = true;
  public skip = 0;
  public state: State = {
    skip: 0,

  };

  constructor(
    private readonly editService: EditService
  ) { }

  ngOnInit() {
    this.gridView = process(data.projects, this.state);
    this.gridView.data = this.gridView.data.map((project: any) => {
      const date = new Date(project.publish_date * 1000);
      project.publish_date = date;
      return project;
    });
    this.loadItems();
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    // close the previously edited item
    this.closeEditor(sender);

    // track the most recently edited row
    // it will be used in `closeEditor` for closing the previously edited row
    this.editedRowIndex = rowIndex;

    // clone the current - `[(ngModel)]` will modify the original item
    // use this copy to revert changes
    this.editedProduct = Object.assign({}, dataItem);

    // edit the row
    sender.editRow(rowIndex);
  }

  public addHandler({ sender }) {
    // close the previously edited item
    this.closeEditor(sender);
  }

  public cancelHandler({ sender, rowIndex }) {
    // call the helper method
    this.closeEditor(sender, rowIndex);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    // close the editor
    grid.closeRow(rowIndex);

    // revert the data item to original state
    this.editService.resetItem(this.editedProduct);

    // reset the helpers
    this.editedRowIndex = undefined;
    this.editedProduct = undefined;
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    // update the data source
    this.editService.save(dataItem);

    // close the editor, that is, revert the row back into view mode
    sender.closeRow(rowIndex);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridView = process(data.projects, this.state);
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: data.projects.slice(this.skip, this.skip + this.pageSize),
      total: data.projects.length
    };
  }

}
```

You can find a EditService sample (inside the ViewSource section) here: https://www.telerik.com/kendo-angular-ui/components/grid/editing/editing-template-forms/

If you have any further questions or requests, do not hesitate to write back.

Best regards,
Dimitar
