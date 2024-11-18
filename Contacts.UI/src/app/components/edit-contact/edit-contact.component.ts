import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../models/IContact';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit {

  public contactId: string | null = null;
  public errorMessage: string | null = null;
  public showLoading: boolean = false;
  public contact: IContact = {} as IContact;
  public contactEditForm: FormGroup;

  firstName = new FormControl("", [Validators.required]);
  lastName = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);
  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService, private router: Router) {
    this.contactEditForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    });
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.contactId = param.get("id");
    });
    if (this.contactId) {
      this.showLoading = true;
      this.contactService.getContact(this.contactId).subscribe((data) => {
        this.contact = data;
        this.showLoading = false;
      }, (error) => {
        this.errorMessage = error;
        this.showLoading = false;
      });
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.contactEditForm.controls[controlName].hasError(errorName);
  };

  public updateContact() {
    this.showLoading = true;
    this.contactService.updateContact(this.contact).subscribe((data) => {
      this.showLoading = false;
      this.router.navigate(['/']).then();
    }, (error) => {
      this.errorMessage = error;
      this.showLoading = false;
      this.router.navigate([`/contact/edit/${this.contactId}`]).then();
    });
  }

}
