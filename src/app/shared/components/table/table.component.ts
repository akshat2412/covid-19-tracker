import { Component, OnInit, Input } from '@angular/core';
import { ITableHeader } from '../../models/tableheader.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  public data: any[]

  @Input()
  public headers: ITableHeader[];

  constructor() { }

  ngOnInit(): void {
  }

}
