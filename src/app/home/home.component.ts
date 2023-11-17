import { Component } from '@angular/core'

import { AxAuthenticationService } from '@atlasx/core/authentication'
import { AxConfigurationService } from '@atlasx/core/configuration'
import { ConfirmDialogModule } from 'primeng/confirmdialog'

import { ConfirmationService } from 'primeng/api'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public configService: AxConfigurationService,
    public authService: AxAuthenticationService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        console.log('Submit click')
        this.addToastSuccess()
        // this.clear()
      },
      reject: () => {
        console.log('Reject click')
        this.addToastError()
        // this.clear()
      },
    })
  }

  // addSingle() {
  //   this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' })
  // }

  addToastSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Info Message', detail: 'You click Submit' })
  }
  addToastError() {
    this.messageService.addAll([{ severity: 'error', summary: 'Info Message', detail: 'You click Reject' }])
  }

  clear() {
    this.messageService.clear()
  }
}
