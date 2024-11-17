import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IContact } from '../models/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private serverURL: string = 'https://localhost:7129/api';
  constructor(private httpClient: HttpClient) { }

  public getAllContacts(): Observable<IContact[]> {
    let dataURL: string = `${this.serverURL}/Contact`;
    return this.httpClient.get<IContact[]>(dataURL).pipe(catchError(this.handleError));
  }

  public getContact(id: string | null): Observable<IContact> {
    let dataURL: string = `${this.serverURL}/Contact/${id}`;
    return this.httpClient.get<IContact>(dataURL).pipe(catchError(this.handleError));
  }

  public updateContact(contact: IContact): Observable<{}> {
    let dataURL: string = `${this.serverURL}/Contact`;
    return this.httpClient.put<{}>(dataURL, contact).pipe(catchError(this.handleError));
  }

  public createContact(contact: IContact): Observable<{}> {
    let dataURL: string = `${this.serverURL}/Contact`;
    return this.httpClient.post<{}>(dataURL, contact).pipe(catchError(this.handleError));
  }

  public deleteContact(id: string | null): Observable<{}> {
    let dataURL: string = `${this.serverURL}/Contact/${id}`;
    return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
  }

  //Error handlling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //Client side error
      errorMessage = `Error : ${error.error.message}`;
    }
    else {
      //Server side error
      errorMessage = `Status :  ${error.status}\n Message : ${error.message}`;
    }
    return throwError(errorMessage);
  }
   
}
