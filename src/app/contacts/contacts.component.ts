import { Component, OnInit } from '@angular/core';
//import microoven service and class
import { Contacts} from '../contacts';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact:Contacts[]=[];
   //constructor injection of the MicroovenService
  constructor(private contactsservice:ContactsService) { }


  ngOnInit(): void {
    const contactObservable= this.contactsservice.getContactsDetails();
    contactObservable.subscribe((contactData: Contacts[])=>{
      this.contact=contactData;
    });
  }

}
