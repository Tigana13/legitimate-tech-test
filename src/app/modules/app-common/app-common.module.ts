import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CdkTreeModule} from '@angular/cdk/tree';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CardsWidgetComponent } from './cards-widget/cards-widget.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';
import { SideNavItemComponent } from './side-nav-item/side-nav-item.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    SideNavComponent,
    TopNavComponent,
    CardsWidgetComponent,
    LoadingScreenComponent,
    PermissionDeniedComponent,
    SideNavItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatSnackBarModule,
    MatTreeModule,
    CdkTreeModule,
    MatIconModule,
    MatStepperModule,
    MatCheckboxModule,
    MatMenuModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,

    MatTooltipModule
  ],
  exports: [
    CardsWidgetComponent,
    LoadingScreenComponent,
    PermissionDeniedComponent,
    SideNavItemComponent,
    TopNavComponent,
  ],
  entryComponents: [
  ],
  providers: [
    DatePipe
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppCommonModule { }
