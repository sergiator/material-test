import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-+dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  formShowing: boolean = false;
  dogs: Object[] = [
    {name: "Porter"},
    {name: "Mal"},
    {name: "Razzle"},
    {name: "Koby"},
    {name: "Molly"},
    {name: "Husi"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
