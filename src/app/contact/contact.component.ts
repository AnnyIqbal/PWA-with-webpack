import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-contact',
  templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  ngOnInit() {
    console.log('Hello Contact in constructor');
  }
}
