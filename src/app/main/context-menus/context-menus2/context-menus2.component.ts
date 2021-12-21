import { Component, OnInit, ViewChild} from '@angular/core';
import { sampleData } from '../jsontreegriddata';
import { EditSettingsModel } from '@syncfusion/ej2-treegrid';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListComponent , ChangeEventArgs} from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-context-menus2',
  templateUrl: './context-menus2.component.html',
  styleUrls: ['./context-menus2.component.css']
})
export class ContextMenus2Component implements OnInit {
  public data: Object[] = [];
  public pageSettings?: Object;
  public selectionSettings?: Object;
  public editing?: EditSettingsModel;
  public contextMenuItems: string[] = [];
  public toolbar?: string[];
  public editparams?: Object;
  public d1data?: Object;
  public fields1?: Object;
  public d2data?: Object;
  public fields2?: Object;
  public d3data?: Object;
  public fields3?: Object;
  cellselection:any;

  @ViewChild('treegrid')
  public treegrid!: TreeGridComponent;

  @ViewChild('dropdown1')
  public dropdown1!: DropDownListComponent;

  @ViewChild('dropdown2')
  public dropdown2!: DropDownListComponent;

  @ViewChild('dropdown3')
  public dropdown3!: DropDownListComponent;

  constructor() { }

  ngOnInit(): void {  
    this.data = sampleData;
    this.pageSettings = { pageSize: 10 };
    this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
    'Edit', 'Delete', 'Save', 'Cancel',
   'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
   'LastPage', 'NextPage'];
    this.editing = { allowDeleting: true, allowEditing: true, mode: 'Row' };
    this.editparams = {params: { format: 'n' }};
    this.selectionSettings = { type: 'Multiple' };
    this.fields1 = { text: 'type' , value: 'id'};
    this.d1data= [{ id: 'Single', type: 'Single' },
                  { id: 'Multiple', type: 'Multiple' }],
    this.fields2 = { text: 'mode' , value: 'id'};
    this.d2data= [{ id: 'Row', mode: 'Row' },
                  { id: 'Cell', mode: 'Cell' },],
    this.fields3 = { text: 'mode' , value: 'id'};
    this.d3data= [{ id: 'Flow', mode: 'Flow' },
                  { id: 'Box', mode: 'Box' }]     
  }
  change1 (e: ChangeEventArgs) : void{
    let type: any = <string>e.value;
    let mode: any = <string>this.dropdown2.value;
    this.treegrid.selectionSettings.type = type;
    if ( type === 'Multiple' && mode === 'Cell' ) {
        this.cellselection = true;
    } else {
        this.cellselection = false;
    }
  }
  change2 (e: ChangeEventArgs) : void {
      let mode: any = e.value;
          let type: any = <string>this.dropdown1.value;
          this.treegrid.selectionSettings.mode = mode;
          if ( type === 'Multiple' && mode === 'Cell' ) {
              this.cellselection = true;
          } else {
            this.cellselection = false;
          }
  }
  change3 (e: ChangeEventArgs) : void {
      let cellmode: any = <string>e.value;
      this.treegrid.selectionSettings.cellSelectionMode = cellmode;
  }
}