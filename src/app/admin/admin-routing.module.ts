import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TablesComponent } from './tables/tables.component';
import { CsvUploaderComponent } from './csv-uploader/csv-uploader.component';
import { ShowTableComponent } from './tables/show-table/show-table.component';
import { TableDetailsComponent } from './tables/table-details/table-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'tables', pathMatch: 'full' },
      {
        path: 'tables',
        component: TablesComponent,
        children: [
          { path: '', component: TableDetailsComponent },
          { path: 'show', component: ShowTableComponent }
        ]
      },
      { path: 'csv-uploader', component: CsvUploaderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
