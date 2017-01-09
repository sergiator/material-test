import { Component } from '@angular/core';
//import { MdToolbar } from '@angular/material/toolbar';
//import { MdSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind",
      link: "account"
    },
    {
      name: "Potential dates",
      description: "Find your soulmate!",
      icon: "pets",
      link: "dogs"
    }
  ];  
}
