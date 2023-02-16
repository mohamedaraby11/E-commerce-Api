import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data:any = {}
  @Output() item = new EventEmitter();
 


  add(){
    this.item.emit(this.data);

  }
}
