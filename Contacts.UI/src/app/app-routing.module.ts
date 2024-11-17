import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageContactComponent } from './components/manage-contact/manage-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact/manage', pathMatch: 'full' },
  { path: 'contact/manage', component: ManageContactComponent },
  { path: 'contact/add', component: AddContactComponent },
  { path: 'contact/edit', component: EditContactComponent },
  { path: 'contact/view', component: ViewContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
