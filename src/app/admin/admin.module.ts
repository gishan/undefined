import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';

import { TablesComponent } from './tables/tables.component';
import { MatCardModule } from '@angular/material/card';
import { AdminLoadingService } from './admin-loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminMenuService } from './admin-menu.service';
import { AddTableComponent } from './tables/add-table/add-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CsvUploaderComponent } from './csv-uploader/csv-uploader.component';
import { ShowTableComponent } from './tables/show-table/show-table.component';
import { TableDetailsComponent } from './tables/table-details/table-details.component';

@NgModule({
  declarations: [
    AdminComponent,
    TablesComponent,
    AddTableComponent,
    CsvUploaderComponent,
    ShowTableComponent,
    TableDetailsComponent
  ],
  entryComponents: [AddTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    // material modules
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTreeModule,
    MatRadioModule,
    MatChipsModule,
    MatTableModule
  ],
  providers: [AdminLoadingService, AdminMenuService]
})
export class AdminModule {}
