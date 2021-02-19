import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "TOAha"
  public nmess = "hello my name is toaha";
  public person = {
    "firstName": "john",
    "lastName": "abraham"
  };

  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
