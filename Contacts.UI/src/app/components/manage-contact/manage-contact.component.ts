import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../models/IContact';

@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrl: './manage-contact.component.css'
})

export class ManageContactComponent implements OnInit {
  public contact: IContact[] = [];
  public errorMessage: string = '';
  public showLoading: boolean = true;
  public showConfirm: boolean = false;

  constructor(private contactService: ContactService) { }
  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data: IContact[]) => {
      this.contact = data;
      this.showLoading = false;
    }, (error) => {
      this.errorMessage = error;
      this.showLoading = false;
    });
  }

  public deleteContact(id: any) {
    if (confirm("Are you sure to delete?")) {
      this.showLoading = true;
      this.contactService.deleteContact(id).subscribe(() => {
        this.contactService.getAllContacts().subscribe((data: IContact[]) => {
          this.contact = data;
          this.showLoading = false;
        }, (error) => {
          this.errorMessage = error;
          this.showLoading = false;
        });
      }, (error) => {
        this.errorMessage = error;
        this.showLoading = false;
      });
    }
  }
}
