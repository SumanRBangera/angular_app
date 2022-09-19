import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Contacts } from './contacts';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  contact: Contacts[]=[
    {
      cproduct:'Shoes',
      cname:'Suman',
      cno:'987654321'
    },{
      cproduct:'T-shirts',
      cname:'Ram',
      cno:'876543921'
    }
  ];
  public getContactsDetails(): any {
    const contactObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.contact);
      }, 1000);
    });
    return contactObservable;
  }
}
