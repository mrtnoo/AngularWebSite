
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  title: String;

  constructor()
  {
    this.title = "Contacto";
  }

  ngOnInit(){

  }


}
