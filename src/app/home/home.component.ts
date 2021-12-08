import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  sendData(DataFromForm: NgForm) {
    console.log('data', DataFromForm.value);
  }

  constructor(private messageService: MessageService) {}

  sendMessage(ref: string): void {
    this.messageService.sendMessage(ref);
    // send message to subscribers via observable subject
    // this.messageService.sendMessage(
    //   'Message from Home Component to App Component!'
    // );
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }
}
