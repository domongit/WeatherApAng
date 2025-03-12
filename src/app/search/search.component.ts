import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() zipcode = new EventEmitter<string>();
  @Input() txztBx!:string;

  constructor() { }

  ngOnInit(): void {
  }
  btnclick() {
 
    this.zipcode.emit(this.txztBx)
 }
}
