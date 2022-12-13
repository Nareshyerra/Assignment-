import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  ContactsService: any;
  msgTrue = false;

  constructor(public contact: ContactsService) { }
  //contactList= any;
  contactList : any;
  ngOnInit(): void {

    this.contact.getContacts().subscribe(priya => {
      this.contactList= priya;
    })
    
  }

  postcontact(data: any){
    console.log(data)
    this.contact.saveUsers(data).subscribe((result)=>{
      this.msgTrue=true
      console.log(result)
    })

  }

  updateContact(id: any){
    const newdata={id: id, firstName:"prashu", lastName:"contact" }
    this.contact.updateContactdetails(id,newdata).subscribe(data=>{
      this.msgTrue=true
      console.log(data)
    })

  }

  deleteContact(id:any){
    this.contact.deletecontact(id).subscribe(data=>{
      console.log(data)
    })
  }



  // userlogin(signinForm: NgForm){
  //   console.log(signinForm.value.emailfield);
  //   console.log(signinForm.value.passwordfield)

}
