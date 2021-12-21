import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenusComponent } from './context-menus.component';
import { ContextMenus1Component } from './context-menus1/context-menus1.component';
import { ContextMenus2Component } from './context-menus2/context-menus2.component';
import { RouterModule, Routes } from '@angular/router';
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { SortService, ResizeService, PageService, EditService, ExcelExportService, PdfExportService, ContextMenuService,ColumnChooserService, ToolbarService,ReorderService,FilterService,RowDDService,ColumnMenuService } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

const routes: Routes = [
  {
    path:'',
    component:ContextMenusComponent 
  }
];

@NgModule({
  declarations: [
    ContextMenusComponent,
    ContextMenus1Component,
    ContextMenus2Component,
  ],
  imports: [
    CommonModule,
    TreeGridAllModule,
    RouterModule.forChild(routes),
    DropDownListAllModule,
    MultiSelectAllModule,
    CheckBoxModule
  ],
  exports:[
    ContextMenusComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [SortService, ResizeService, PageService, EditService, ExcelExportService, PdfExportService, ContextMenuService,ColumnChooserService, ToolbarService,ReorderService,FilterService,RowDDService,ColumnMenuService]
})
export class ContextMenusModule { }
