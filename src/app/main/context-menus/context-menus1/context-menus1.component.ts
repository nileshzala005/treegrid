import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { EditSettingsModel } from '@syncfusion/ej2-treegrid';
import { DropDownListComponent , ChangeEventArgs, DropDownList} from '@syncfusion/ej2-angular-dropdowns';
import { ButtonComponent, CheckBoxComponent,CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { sampleData } from '../jsontreegriddata';
import { SortEventArgs } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-context-menus1',
  templateUrl: './context-menus1.component.html',
  styleUrls: ['./context-menus1.component.css'],
})
export class ContextMenus1Component implements OnInit {
  public data: Object[] = [];
  public pageSettings?: Object;
  public contextMenuItems: string[] = [];
  public editing?: EditSettingsModel;
  public toolbar?: string[];
  public editparams?: Object;
  public templateOptions?: object;
  public dropDownFilter:any = DropDownListComponent;
  public edit?: Object;
  public d1datas?: Object;
  public d1data?: Object;
  public ddlfields?: Object;
  public fields1?: Object;
  public sortSettings?: Object;
  constructor() { }

  @ViewChild('treegrid')
  public treegrid!: TreeGridComponent ;
  @ViewChild('dropdown1')
  public dropdown1! : DropDownListComponent;
  @ViewChild('button1')
  public button1! : ButtonComponent;
  @ViewChild('button2')
  public button2! : ButtonComponent;
  @ViewChild('taskID')
  public taskID!: CheckBoxComponent;
  @ViewChild('taskName')
  public taskName!: CheckBoxComponent;
  @ViewChild('startDate')
  public startDate!: CheckBoxComponent;
  @ViewChild('endDate')
  public endDate!: CheckBoxComponent;
  @ViewChild('duration')
  public duration!: CheckBoxComponent;
  @ViewChild('progress')
  public progress!: CheckBoxComponent;
  @ViewChild('priority')
  public priority!: CheckBoxComponent;

ngOnInit(): void {
    this.data = sampleData;
    this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
    'Edit', 'Delete', 'Save', 'Cancel',
    'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
    'LastPage', 'NextPage'];
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel','ColumnChooser'];
    this.editing = { allowDeleting: true, allowEditing: true,  allowAdding: true,mode: 'Row' };
    this.pageSettings= { pageSize: 10 };
    this.editparams = {params: { format: 'n' }};
    this.edit = { params: {  format: 'n'}};
    this.ddlfields = { text: 'name' , value: 'id'};
    this.d1datas= [{ id: 'taskID', name: 'taskID'},
    { id: 'taskName', name: 'taskName'},
    { id: 'startDate', name: 'startDate'},
    { id: 'endDate', name: 'endDate'},
    { id: 'duration', name:'duration'},  
    { id: 'progress', name:'progress'},
    { id: 'priority', name:'priority'}
    ]

    this.templateOptions = {
        create: (args: { element: Element }) => {
            let dd: HTMLInputElement = document.createElement('input');
            dd.id = 'duration';
            return dd;
        },
        write: (args: { element: Element }) => {
            let dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
            this.dropDownFilter = new DropDownList({
                dataSource: dataSource,
                value: 'All',
                change: (e: ChangeEventArgs) => {
                    let valuenum: any = +e.value;
                    let id: any = <string>this.dropDownFilter.element.id;
                    let value: any = <string>e.value;
                    if ( value !== 'All') {
                        this.treegrid.filterByColumn( id, 'equal', valuenum );
                    } else {
                        this.treegrid.removeFilteredColsByField(id);
                    }
                }
            });
            this.dropDownFilter.appendTo('#duration');
    }
    };
    this.fields1 = { text: 'mode' , value: 'id'};
    this.d1data= [{ id: 'Parent', mode: 'Parent' },
                    { id: 'Child', mode: 'Child' },
                    { id: 'Both', mode: 'Both' },
                    { id: 'None', mode: 'None' },]
    this.sortSettings =  { columns: 
        [{ field: 'taskID', direction: 'Ascending'  }, 
            { field: 'taskName', direction: 'Ascending' },]
    }
    }

    change (e: ChangeEventArgs) : void {
        let columnName: string = <string>e.value;
        let column  = this.treegrid.getColumnByField(columnName);
        if (column.visible === undefined || column.visible) {
            this.button2.disabled = true;
            this.button1.disabled = false;
        } else {
            this.button1.disabled = true;
            this.button2.disabled = false;
        }
    }
    public clicked(e: MouseEvent): void {
        let columnName: string = <string>this.dropdown1.value;
        let column  = this.treegrid.getColumnByField(columnName);
        let hiddenColumns: HTMLTextAreaElement = document.getElementById('hiddencolumns') as HTMLTextAreaElement;
        this.treegrid.grid.showColumns(column.headerText, 'headerText');
        this.button2.disabled = true;
        this.button1.disabled = false;
        hiddenColumns.value = hiddenColumns.value.replace(column.headerText + '\n', '');
    }
    onClicked(): void {
        let columnName: string = <string>this.dropdown1.value;
        let column = this.treegrid.getColumnByField(columnName);
        let hiddenColumns: HTMLTextAreaElement = document.getElementById('hiddencolumns') as HTMLTextAreaElement;

        if (this.treegrid.getHeaderTable().querySelectorAll('th.e-hide').length === 3) {
            alert('Atleast one Column should be visible');
        } else {
            this.treegrid.grid.hideColumns(column.headerText, 'headerText');
            this.button1.disabled = true;
            this.button2.disabled = false;
            hiddenColumns.value = hiddenColumns.value + column.headerText + '\n';
        }
    };

    changes (e: ChangeEventArgs) : void {
    let mode: any = <string>e.value;
    this.treegrid.filterSettings.hierarchyMode = mode;
    this.treegrid.clearFiltering();
    this.dropDownFilter.value = 'All';
    }

    public onClick1(e:any = MouseEvent): void {
    if (this.taskID?.checked) {
        this.treegrid.sortByColumn('taskID', 'Ascending', true);
    } else {
        this.treegrid.grid.removeSortColumn('taskID');
    }

    }
    public onClick2(e:any = MouseEvent): void {
    if (this.taskName?.checked) {
        this.treegrid.sortByColumn('taskName', 'Ascending', true);
    } else {
        this.treegrid.grid.removeSortColumn('taskName');
    }

    }
    public onClick3(e:any = MouseEvent): void {
    if (this.startDate?.checked) {
        this.treegrid.sortByColumn('startDate', 'Ascending', true);
    } else {
        this.treegrid.grid.removeSortColumn('startDate');
    }

    }
    public onClick4(e:any = MouseEvent): void {
    if (this.endDate?.checked) {
        this.treegrid.sortByColumn('endDate', 'Ascending', true);
    } else {
        this.treegrid.grid.removeSortColumn('endDate');
    }

    }
    public onClick5(e:any = MouseEvent): void {
        if (this.duration?.checked) {
            this.treegrid.sortByColumn('duration', 'Ascending', true);
        } else {
            this.treegrid.grid.removeSortColumn('duration');
        }
    
    }
    public onClick6(e:any = MouseEvent): void {
        if (this.progress?.checked) {
            this.treegrid.sortByColumn('progress', 'Ascending', true);
        } else {
            this.treegrid.grid.removeSortColumn('progress');
        }
    
    }
    public onClick7(e:any = MouseEvent): void {
        if (this.priority?.checked) {
            this.treegrid.sortByColumn('priority', 'Ascending', true);
        } else {
            this.treegrid.grid.removeSortColumn('priority');
        }
    
    }
    public sort (args: SortEventArgs ): void {
    if (args.requestType === 'sorting') {
        for (let columns of this.treegrid.getColumns()) {
            for (let sortcolumns of this.treegrid.sortSettings.columns!) {
                if (sortcolumns.field === columns.field) {
                    this.check(sortcolumns.field, true); break;
                } else {
                    this.check(columns.field, false);
                }
            }
        }
    }
    }
    public check(field: string, state: boolean): void {
    switch (field) {
        case 'taskID':
            this.taskID.checked = state; break;
        case 'taskName':
            this.taskName.checked = state; break;
        case 'startDate':
            this.startDate.checked = state; break;
        case 'endDate':
            this.endDate.checked = state; break;
        case 'duration':
            this.duration.checked = state; break;
        case 'progress':
            this.progress.checked = state; break;
        case 'priority':
            this.priority.checked = state; break;
    }
    }

}
