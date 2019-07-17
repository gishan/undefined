import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { AddTableComponent } from '../add-table/add-table.component';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {
  tables: any;
  animal: string;
  name: string;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {
    this.afs
      .collection('system', ref => ref.where('type', '==', 'table'))
      .valueChanges()
      .subscribe((tables: any) => {
        console.log('tas', tables);
        this.tables = tables;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTableComponent, {
      width: '700px',
      data: { name: '', fields: [] }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.animal = result;
    });
  }
}
