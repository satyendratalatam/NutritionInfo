import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit ,AfterViewInit {

  constructor() { }
  displayedColumns: string[] = ['r', 'description', 'contractManufacturer', 'manufacturer', 'calories', 'proteins'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  r: string;
  description: string;
  contractManufacturer: string;
  manufacturer: string;
  calories: string;
  proteins: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {r: 'R00003', description: 'PAPAYA FRUIT POWDER', contractManufacturer: 'G4, D9, 99', manufacturer: 'HIM Changsha', calories: '389.28', proteins: '0.8'},
  {r: 'R00008', description: 'CALCIUM CASEINATE (W/ SOY LECITHIN)', contractManufacturer: '99, D9', manufacturer: 'Erie (ECCO 2500)', calories: '372', proteins: '89.3'},
  {r: 'R00011', description: 'CITRUS PECTIN', contractManufacturer: 'A8', manufacturer: 'Danisco (Grindsted SS200)', calories: '120', proteins: '0'},
  {r: 'R00012', description: 'FRUCTOSE POWDER', contractManufacturer: 'A8, G4, D9, 99', manufacturer: 'Tate & Lyle (Krystar 300)', calories: '366', proteins: '0'},
  {r: 'R00026', description: 'CALCIUM CASEINATE, SPRAY DRIED', contractManufacturer: 'D9', manufacturer: 'Erie', calories: '375', proteins: '88.5'},
  {r: 'R00026', description: 'CALCIUM CASEINATE, SPRAY DRIED (NON GMO)', contractManufacturer: 'A8, G4, 99', manufacturer: 'DMV (Excellion)', calories: '370', proteins: '91'},
  ];
