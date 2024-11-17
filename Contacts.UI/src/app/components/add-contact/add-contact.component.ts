import { Component, OnInit } from '@angular/core';
import { IContact } from '../../models/IContact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent implements OnInit {
  public errorMessage: string | null = null;
  public showLoading: boolean = false;
  public contact: IContact = {} as IContact;

  constructor(private contactService: ContactService, private router: Router) {

  }

  ngOnInit(): void {
      
  }

  public createContact() {
    this.showLoading = true;
    this.contactService.createContact(this.contact).subscribe((data) => {
      this.showLoading = false;
      this.router.navigate(['/']).then(); 
    }, (error) => {
      this.errorMessage = error;
      this.showLoading = false;
      this.router.navigate(['/contact/add']).then(); 
    });
  }
  
}
