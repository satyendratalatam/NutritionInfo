import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-shortnut',
  templateUrl: './shortnut.component.html',
  styleUrls: ['./shortnut.component.scss']
})
export class ShortnutComponent implements OnInit ,AfterViewInit {
  displayedColumns: string[] = ['Version', 'V1', 'V2', 'V2' ,'UOM' ,];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  Version: string;
  V1: string;
  V2: string;
  UOM: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},
  {Version: 'Calories', V1: '10', V2: '10', UOM: 'g'},

];
