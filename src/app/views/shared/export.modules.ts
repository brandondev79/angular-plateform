import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';

// Components
// import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
// import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';
// import { RouterModule } from '@angular/router';
// import { ProfileBarComponent } from '../profile-bar/profile-bar.component';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    // NgMultiSelectDropDownModule.forRoot(),
    ModalModule.forRoot(),
    // RouterModule,
    // NgSelectModule,
    // CommonModule,
    // FormsModule
  ],
  declarations: [
    // ConfirmationModalComponent,
    // ProfileBarComponent,
    // ForgotPasswordComponent,
  ],
  exports: [
    // ConfirmationModalComponent,
    // ForgotPasswordComponent,
    // ModalModule,
    // ProfileBarComponent,
    // RouterModule,
    // NgMultiSelectDropDownModule,
    // NgSelectModule
  ],
  entryComponents: [
    // ConfirmationModalComponent,
    // ForgotPasswordComponent,
  ],
  providers: []
})
export class ExportModules { }
