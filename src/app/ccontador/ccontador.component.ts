import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-ccontador',
  templateUrl: './ccontador.component.html',
  styleUrl: './ccontador.component.css'
})
export class CcontadorComponent {
 
counter:number=10

handleCounter(value:number){
  this.counter=value
}


}
