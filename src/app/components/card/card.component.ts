import { Component, OnInit, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  @Input() titulo:string
  @Input() descricao:string

  constructor() { }

  ngOnInit() {
  }

}
