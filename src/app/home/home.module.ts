import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CallbackComponent } from './callback/callback.component'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { LoginComponent } from './login/login.component'
import { ButtonModule } from 'primeng/button'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ToastModule } from 'primeng/toast'

import { ConfirmationService } from 'primeng/api'
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [HomeComponent, LoginComponent, CallbackComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomeRoutingModule, ButtonModule, ConfirmDialogModule,ToastModule],
  providers: [ConfirmationService,MessageService],
})
export class HomeModule {}
