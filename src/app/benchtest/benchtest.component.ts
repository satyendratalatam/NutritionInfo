import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-benchtest',
  templateUrl: './benchtest.component.html',
  styleUrls: ['./benchtest.component.scss']
})
export class BenchtestComponent implements OnInit ,AfterViewInit{

  constructor() { }
  displayedColumns: string[] = ['Manufacturer', 'PaperFormula', 'V1', 'V2' ,'BRLNetCost' ,'CostPerPkg'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  Manufacturer: string;
  PaperFormula: string;
  V1: string;
  V2: string;
  BRLNetCost: string;
  CostPerPkg: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Manufacturer: '1', PaperFormula: 'POTASSIUM CHLORIDE USP GRANULAR - Labsynth (C1058)', V1: '10', V2: '10' , BRLNetCost : '10', CostPerPkg :'10'},
  {Manufacturer: '1', PaperFormula: 'POTASSIUM CHLORIDE USP GRANULAR - Labsynth (C1058)', V1: '10', V2: '10' , BRLNetCost : '10', CostPerPkg :'10'},
  {Manufacturer: '1', PaperFormula: 'POTASSIUM CHLORIDE USP GRANULAR - Labsynth (C1058)', V1: '10', V2: '10' , BRLNetCost : '10', CostPerPkg :'10'},
  {Manufacturer: '1', PaperFormula: 'POTASSIUM CHLORIDE USP GRANULAR - Labsynth (C1058)', V1: '10', V2: '10' , BRLNetCost : '10', CostPerPkg :'10'},
  {Manufacturer: '1', PaperFormula: 'POTASSIUM CHLORIDE USP GRANULAR - Labsynth (C1058)', V1: '10', V2: '10' , BRLNetCost : '10', CostPerPkg :'10'},
  {Manufacturer: '1', PaperFormula: 'POTASSIUM CHLORIDE USP GRANULAR - Labsynth (C1058)', V1: '10', V2: '10' , BRLNetCost : '10', CostPerPkg :'10'},
  {Manufacturer: '1', PaperFormula: 'POTASSIUM CHLORIDE USP GRANULAR - Labsynth (C1058)', V1: '10', V2: '10' , BRLNetCost : '10', CostPerPkg :'10'},
  {Manufacturer: '1', PaperFormula: 'POTASSIUM CHLORIDE USP GRANULAR - Labsynth (C1058)', V1: '10', V2: '10' , BRLNetCost : '10', CostPerPkg :'10'},
];
