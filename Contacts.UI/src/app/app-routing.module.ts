import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageContactComponent } from './components/manage-contact/manage-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact/manage', pathMatch: 'full' },
  { path: 'contact/manage', component: ManageContactComponent },
  { path: 'contact/add', component: AddContactComponent },
  { path: 'contact/edit/:id', component: EditContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
