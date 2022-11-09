// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Partials
import { PartialsModule } from '../../../../partials/partials.module';
// Highlight JS
import { HighlightModule } from 'ngx-highlightjs';
// CoreModule
import { CoreModule } from '../../../../../core/core.module';
// CreateUser component
import { CreateUserComponent } from './create-user.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		FormsModule,
		NgbModule,
		MatTabsModule,
		CoreModule,
		PerfectScrollbarModule,
		HighlightModule,
		RouterModule.forChild([
			{
				path: '',
				component: CreateUserComponent
			}
		])
	],
	providers: [],
	declarations: [CreateUserComponent]
})
export class CreateUserModule {
}
