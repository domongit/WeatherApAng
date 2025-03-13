import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent implements OnInit {
@Input() feelsLike! :string;
@Input() locationName! :string;
@Input() skies! :string;


  constructor() { }

  ngOnInit(): void {
  }
 


}
