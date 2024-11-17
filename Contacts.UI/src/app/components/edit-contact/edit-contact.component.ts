import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../models/IContact';

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

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService, private router: Router) {

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
