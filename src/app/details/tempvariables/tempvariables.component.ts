import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-tempvariables',
  templateUrl: './tempvariables.component.html',
  styleUrls: ['./tempvariables.component.css']
})
export class TempvariablesComponent {
  @Input()  thisType:string = ""  
  @Input()  thisValue:string  = ""
  @Input() thisIcon:string=""

  get getFullPath()
  { 
    return '../assets/' + this.thisIcon;
  }

}
