import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // private apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  sendContactForm(data: any): Observable<any> {
    return this.http.post('/api/contact', data);
  }
  purchase(data: any): Observable<any> {
    return this.http.post('/api/send-order', data);
  }
}
