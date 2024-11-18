import { Component, OnInit } from '@angular/core';
import { IContact } from '../../models/IContact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent implements OnInit {
  public errorMessage: string | null = null;
  public showLoading: boolean = false;
  public contact: IContact = {} as IContact;
  public contactAddForm: FormGroup;

  firstName = new FormControl("", [Validators.required]);
  lastName = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);

  constructor(private contactService: ContactService, private router: Router) {
    this.contactAddForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    });
  }

  ngOnInit(): void {
   
  }

  

  public hasError = (controlName: string, errorName: string) => {
    return this.contactAddForm.controls[controlName].hasError(errorName);
  };

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
